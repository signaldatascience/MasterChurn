from selenium import webdriver
def applyChase(spid, data, mmn, residence):#data = [firstname, mi, lastname, email, dob, address, apt, city, state, zip, ssn, income, phone, housing, source, nontaxable]
	driver, id, i = webdriver.Chrome('chromedriver_win32/chromedriver.exe'), ['FirstName', 'MiddleInitial', 'LastName', 'StreetAddr1', 'Apartment', 'City', 'Zip', 'DOB', 'EMailAddr2', 'SSN', 'AnnualIncome', 'HomePhone'], [0, 1, 2, 5, 6, 7, 8, 4, 3, 10, 11, 12]#webdriver.Chrome(path_to_chromedriver.exe)
	driver.get('https://applynow.chase.com/FlexAppWeb/renderApp.do?SPID=' + spid)
	for j in range(len(id)): driver.find_element_by_xpath('//*[@id="s' + id[j] + '"]').send_keys(data[i[j]])
	driver.find_element_by_xpath('//*[@id="sState1"]').click()
	driver.find_element_by_xpath("//select[@id='sState1']/option[@value='" + data[9] + "']").click()
	driver.find_element_by_xpath('//*[@id="sMaidenName"]').send_keys(mmn)
	driver.find_element_by_xpath('//*[@id="sHousingType"]').click()
	driver.find_element_by_xpath("//select[@id='sHousingType']/option[@value='" + residence + "']").click()
	driver.find_element_by_xpath('//*[@id="sMonthlyMortgage"]').send_keys(data[13])
	driver.find_element_by_xpath('//*[@id="sPosition"]').click()
	driver.find_element_by_xpath("//select[@id='sPosition']/option[@value='" + data[14] + "']").click()
	if data[15] == '0': driver.find_element_by_xpath('//*[@id="atp_radio_options"]/div/label[2]').click()
	else:
		driver.find_element_by_xpath('//*[@id="atp_radio_options"]/div/label[1]').click()
		driver.find_element_by_xpath('//*[@id="sNonTaxableIncome"]').send_keys(str(data[15]))
	driver.find_element_by_xpath('//*[@id="terms-cheerios-agree"]').click()
	driver.find_element_by_xpath('//*[@id="flexappsubmit"]').click()
