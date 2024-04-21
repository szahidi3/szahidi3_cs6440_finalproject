# Project Overview

ICD-10 is the most recent revision of the International Classification of Diseases (ICD) standard. ICD is a classification standard that promotes international standardization in patient diagnosis and treatment (National Center for Health Statistics, 2023). Patient information reported by the ICD-10 standard are translated into ICD-10-CM codes, which can be used to classify diagnosis for medical conditions, and ICD-10-HCPCS codes, which can be used to classify “medical procedures, supplies, products and services” (National Center for Health Statistics, 2015; National Library of Medicine, 2012). There are also other ICD-10 groups in addition to the two that are aforementioned, though this tool does not account for those. This web application allows users to search for any ICD-10 CM or HCPCS code using the name of the disease or process.

### JSON Data Resource

I created the JSON data resource (which can be found at [https://github.com/szahidi3/szahidi3_cs6440_finalproject/blob/main/src/data/icd10codes_dataresource.json](https://github.com/szahidi3/szahidi3_cs6440_finalproject/blob/main/src/data/icd10codes_dataresource.json)) the user interface of my web application queries search results from, after being divided into smaller JSON files (which can be found at [https://github.com/szahidi3/szahidi3_cs6440_finalproject/tree/main/src/data](https://github.com/szahidi3/szahidi3_cs6440_finalproject/tree/main/src/data)), by adding ICD-10 HCPCS codes (found at [https://www.hcpcsdata.com/Codes](https://www.hcpcsdata.com/Codes)) to the existing ICD-10 CM code data dump created by Cryokaustik (which can be found at [https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json](https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json) (Cryocaustik, 2019; HCPCSDATA.com, 2024).

### References:

1. National Center for Health Statistics. (2015). International Classification of Diseases, (ICD-10-CM/PCS) Transition - Background. Classification of Diseases, Functioning, and Disability.
[https://www.cdc.gov/nchs/icd/icd10cm_pcs_background.htm](https://www.cdc.gov/nchs/icd/icd10cm_pcs_background.htm)

2. National Center for Health Statistics. (2023). International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM). Classification of Diseases, Functioning, and Disability.
[https://www.cdc.gov/nchs/icd/icd-10-cm.htm](https://www.cdc.gov/nchs/icd/icd-10-cm.htm)

3. National Library of Medicine. (2012). HCPCS (HCPCS - Healthcare Common Procedure Coding System) – Synopsis. Unified Medical Language System.
[https://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/HCPCS/index.html#:~:text=HCPCS%20(HCPCS%20%2D%20Healthcare%20Common%20Procedure%20Coding%20System)%20%2D%20Synopsis,-Synopsis%20Metadata%20Statistics&text=The%20Healthcare%20Common%20Procedure%20Coding,and%20Medicaid%20Services%20(CMS).&text=HCPCS%20is%20a%20collection%20of,%2C%20supplies%2C%20products%20and%20services](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/HCPCS/index.html#:~:text=HCPCS%20(HCPCS%20%2D%20Healthcare%20Common%20Procedure%20Coding%20System)%20%2D%20Synopsis,-Synopsis%20Metadata%20Statistics&text=The%20Healthcare%20Common%20Procedure%20Coding,and%20Medicaid%20Services%20(CMS).&text=HCPCS%20is%20a%20collection%20of,%2C%20supplies%2C%20products%20and%20services)

4.	Cryocaustik. (2019). CMS ICD GEMs JSON Dump. GitHub. 
[https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json](https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json)

5.	HCPCSDATA.com. (2024). Free 2024 HCPCS Codes. HCPCSDATA.com. [https://www.hcpcsdata.com/Codes](https://www.hcpcsdata.com/Codes)

# How to Clone This Web Application Locally and Deploy It to a Local Host

You need Node.JS and Git installed on your local machine or container in which you want to deploy the web application.

To learn how to install Node.JS for your specific machine or environment, please reference the following website:

[https://nodejs.org/en](https://nodejs.org/en)

To learn how to install Git for your specific machine or environment, please reference the following website:

[https://docs.github.com/en/get-started/getting-started-with-git/set-up-git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

## Clone the React Project Locally

In a bash shell, navigate to the folder in which you want to clone the Git repository. Run the following commands:

`git clone https://github.com/szahidi3/szahidi3_cs6440_finalproject.git`

`cd szahidi3_cs6440_finalproject.git`

## Running the Web Application Locally

Install any dependencies by running:

`npm i`

If the installation shows any errors in the command line, run the following command to audit and fix any errors:

`npm audit fix`

Start the web application on a local host by running the following command:

`npm start`

Once the application finishes deploying locally, the command line output should return something like this:

`Compiled successfully!`

`You can now view szahidi3_cs6440_finalproject in the browser.`

`Local:            http://localhost:3000/szahidi3_cs6440_finalproject`

Open a web browser and navigate to the link that is shown after "Local" in this output (this might very for your particular machine, especially if you are using a container, but it is typically 
[ http://localhost:3000/szahidi3_cs6440_finalproject]( http://localhost:3000/szahidi3_cs6440_finalproject)

Once at the link, you can use the application.

## Remote Deploy
If you wish to deploy this application through a hosting service, or remotely in some other fashion, the process will vary depending on what approach you are using. Here is link to a guide that helped me deploy my project to GitHub pages:

[https://github.com/gitname/react-gh-pages](https://github.com/gitname/react-gh-pages)

## Using the Web Application

Navigate to [https://szahidi3.github.io/szahidi3_cs6440_finalproject/](https://szahidi3.github.io/szahidi3_cs6440_finalproject/) or the relevant link to your local/remote host if deploying the application yourself.

The user interface for the web application looks like this:

![ui1](src/Documentation/images/UI1.png "ui1")

Scrolling down:

![ui2](src/Documentation/images/UI2.png "ui2")

Simply click on the search bar shown in the screenshot and type in the name of the ICD-10 CM disease or HCPCS process and the search bar should return the five best matches for your search query, showing the name of the disease or process, as well as its ICD-10 code:

![ui3](src/Documentation/images/UI3.png "ui3")


