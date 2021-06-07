######################################################################
##################      nsetools API    ##############################
######################################################################

# from nsetools import Nse

# nse = Nse()
# print(nse.get_quote("infy"))
# print(nse.get_index_list())
# print(nse.get_index_quote("nifty 50"))
# stock_codes = nse.get_stock_codes()
# print(len(stock_codes))

##################################################################
##################   nsepython API  ##############################
##################################################################

# from nsepython import *

# print(indices)

# print(nse_past_results("INFY", ))
# print(nse_eq("INFY"))

##################################################################
#####################  nsepy API #################################
##################################################################

# import csv
# with open('output.csv') as csv_sbin:
#     csv_reader = csv.reader(csv_sbin, delimiter=',')
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 0:
#             print(f'Column names are {", ".join(row)}')
#             line_count += 1
#         else:
#             print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
#             line_count += 1
#     print(f'Processed {line_count} lines.')
# https://nsepy.xyz/
symbol = ["INFY"]
import datetime
import numpy as np
from datetime import date
from nsepy import get_history

for s in symbol:
    data = get_history(s, start=date(2021, 3, 22), end=date(2021, 3, 26))
    print(data.index[0], type(data.index[0]))
    # print(data.loc[date("2021-03-22")])
    print(np.dtype(data.index[0]))
