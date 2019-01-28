from pytrends.request import TrendReq

trend = TrendReq(hl = 'en-us')

#countries = ['US', 'GB', 'SG', 'MY', 'IN', 'PH']
countries = ['US']
trend.build_payload(['how to'],
                    cat=0,
                    timeframe='2018-01-01 2018-12-27',
                    geo='country'
                    )

related = trend.related_queries()

how_to = related['how to -dragon']['rising']
what_is = related['what is']['rising']
why = related['why']['rising']
when_is = related['when is -2018 -2019']['rising']
how = related['how -dragon']['rising']



