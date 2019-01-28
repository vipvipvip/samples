import pandas as pd
import numpy as np
import os

# read data from local current directory
data = pd.read_csv(os.getcwd() + "\\train.csv", index_col="Loan_ID")

# how to filter
# print data.loc[(data["Gender"] == "Male") & (data["Married"] == "No")]

# find missing values using apply()
def num_missing(x):
    return sum(x.isnull())

# columns
#print data.apply(num_missing, axis=0)

# rows
print data.apply(num_missing, axis=1).head()
