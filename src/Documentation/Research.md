# Research

## Background Research on ICD-10 codes

### Here is a quick summary of what I learned about ICD-10 codes during my background research:

ICD-10 is the most recent revision of the International Classification of Diseases (ICD) standard. ICD is a classification standard that promotes international standardization in patient diagnosis and treatment (National Center for Health Statistics, 2023). Patient information reported by the ICD-10 standard are translated into ICD-10-CM codes, which can be used to classify diagnosis for medical conditions, and ICD-10-HCPCS codes, which can be used to classify “medical procedures, supplies, products and services” (National Center for Health Statistics, 2015; National Library of Medicine, 2012). There are also other ICD-10 groups in addition to the two that are aforementioned, though this tool does not account for those. This web application allows users to search for any ICD-10 CM or HCPCS code using the name of the disease or process.

### JSON Data Resource

I created the JSON data resource (which can be found at [https://github.com/szahidi3/szahidi3_cs6440_finalproject/blob/main/src/data/icd10codes_dataresource.json](https://github.com/szahidi3/szahidi3_cs6440_finalproject/blob/main/src/data/icd10codes_dataresource.json)) the user interface of my web application queries search results from, after being divided into smaller JSON files (which can be found at [https://github.com/szahidi3/szahidi3_cs6440_finalproject/tree/main/src/data](https://github.com/szahidi3/szahidi3_cs6440_finalproject/tree/main/src/data)), by adding ICD-10 HCPCS codes (found at [https://www.hcpcsdata.com/Codes](https://www.hcpcsdata.com/Codes)) to the existing ICD-10 CM code data dump created by Cryokaustik (which can be found at [https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json](https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json) (Cryocaustik, 2019; HCPCSDATA.com, 2024).

### References (With Links to Articles That I Read to Gain Background Knowledge of ICD-10 Codes and Put Together My JSON Data Resource Files):

1. National Center for Health Statistics. (2015). International Classification of Diseases, (ICD-10-CM/PCS) Transition - Background. Classification of Diseases, Functioning, and Disability.
[https://www.cdc.gov/nchs/icd/icd10cm_pcs_background.htm](https://www.cdc.gov/nchs/icd/icd10cm_pcs_background.htm)

2. National Center for Health Statistics. (2023). International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM). Classification of Diseases, Functioning, and Disability.
[https://www.cdc.gov/nchs/icd/icd-10-cm.htm](https://www.cdc.gov/nchs/icd/icd-10-cm.htm)

3. National Library of Medicine. (2012). HCPCS (HCPCS - Healthcare Common Procedure Coding System) – Synopsis. Unified Medical Language System.
[https://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/HCPCS/index.html#:~:text=HCPCS%20(HCPCS%20%2D%20Healthcare%20Common%20Procedure%20Coding%20System)%20%2D%20Synopsis,-Synopsis%20Metadata%20Statistics&text=The%20Healthcare%20Common%20Procedure%20Coding,and%20Medicaid%20Services%20(CMS).&text=HCPCS%20is%20a%20collection%20of,%2C%20supplies%2C%20products%20and%20services](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/HCPCS/index.html#:~:text=HCPCS%20(HCPCS%20%2D%20Healthcare%20Common%20Procedure%20Coding%20System)%20%2D%20Synopsis,-Synopsis%20Metadata%20Statistics&text=The%20Healthcare%20Common%20Procedure%20Coding,and%20Medicaid%20Services%20(CMS).&text=HCPCS%20is%20a%20collection%20of,%2C%20supplies%2C%20products%20and%20services)

4.	Cryocaustik. (2019). CMS ICD GEMs JSON Dump. GitHub. 
[https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json](https://gist.githubusercontent.com/cryocaustik/b86de96e66489ada97c25fc25f755de0/raw/b31a549638a609004e9a45f8933c3f37bdf4c27d/icd10_codes.json)

5.	HCPCSDATA.com. (2024). Free 2024 HCPCS Codes. HCPCSDATA.com. [https://www.hcpcsdata.com/Codes](https://www.hcpcsdata.com/Codes)