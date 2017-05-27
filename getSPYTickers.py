import pandas as pd
import numpy as np

from urllib import urlopen
from bs4 import BeautifulSoup
import csv

def main():
    tDict = {}
    fh = urlopen("http://en.wikipedia.org/wiki/List_of_S%26P_500_companies")
    hpg = fh.read()
    fh.close()
    
    soup = BeautifulSoup(hpg)
    i=0
    for row in soup('table')[0].find_all('tr'):
        if row.find_all('td'):
            tDict[row.find_all('td')[0].string] = row.find_all('td')[1].string
            i=i+1
        #if i > 5:
        #    break
    
    with open("SPYTickers.csv", "wb")as f:
        wr = csv.writer(f, dialect='excel')
        wr.writerow(["Tick", "Company Name"])
        for data in sorted(tDict.items()):
            wr.writerow(data)

def main2():
    pdMC = pd.DataFrame(columns=['Tick', 'MktCap'])
    pdf = pd.DataFrame(columns=['Tick', 'Company Name', 'GICS', 'MktCap'])
    fh = urlopen("http://en.wikipedia.org/wiki/List_of_S%26P_500_companies")
    hpg = fh.read()
    fh.close()
    
    soup = BeautifulSoup(hpg)
    i=0
    ticker = ""
    for row in soup('table')[0].find_all('tr'):
        if row.find_all('td'):
            
            ticker = row.find_all('td')[0].string
            url_A = "http://finance.yahoo.com/d/quotes.csv?s="
            url_A = url_A + ticker
            url_A = url_A + "&f=sj1"
                       
            resp = urlopen(url_A)
            rows = csv.reader(resp)
            for x in rows:
                #print(x[0])
                #print(x[1])
                mc = x[1]
            resp.close()

            if mc != 'N/A':
                pdf.loc[i] = [ticker,                           # Ticker
                          row.find_all('td')[1].string,   # Company Name
                          row.find_all('td')[3].string,   #GICS
                          mc]   #MktCap
                i=i+1
        #if i > 5:
        #    break

    
    with open("SPYTickers.csv", "wb")as f:
        pdf.to_csv(f,index=False)
        #pdf.to_csv(f,index=False,sep=",", columns=(['Tick']), header=False)


def main3():
    pdMC = pd.DataFrame(columns=['Tick', 'MktCap'])
    pdf = pd.DataFrame(columns=['Tick', 'Company Name', 'GICS', 'MktCap'])
    fh = urlopen("http://en.wikipedia.org/wiki/List_of_S%26P_500_companies")
    hpg = fh.read()
    fh.close()

    url_A = "http://finance.yahoo.com/d/quotes.csv?s="
    url_A = url_A + '!!TICK!!'
    url_A = url_A + "&f=sj1"
    
    soup = BeautifulSoup(hpg, "lxml")
    i=0
    ticker = ""
    for row in soup('table')[0].find_all('tr'):
        if row.find_all('td'):
            ticker = row.find_all('td')[0].string
            pdf.loc[i] = [ticker,                           # Ticker
                      row.find_all('td')[1].string,   # Company Name
                      row.find_all('td')[3].string,   #GICS
                      0]   #MktCap
            i=i+1
        #if i > 5:
        #    break



    
    nMaxTickers = 199
    
        
    #resp = urlopen(url_A)
    #rows = csv.reader(resp)
    #for x in rows:
        #print(x[0])
        #print(x[1])
    #    mc = x[1]
    #resp.close()

    with open("SPYTickers3.csv", "wb")as f:
        pdf.to_csv(f,index=False)
        #pdf.to_csv(f,index=False,sep=",", columns=(['Tick']), header=False)

    return pd.read_csv("SPYTickers3.csv")
    
if __name__ == "__main__":
    main3()    
    #get_stats('AAPL')