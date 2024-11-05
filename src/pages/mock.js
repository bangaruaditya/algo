import requests

const naukri  = () => {

}

    cookies = {
        'HitsFromTieup': '23531',
        'wExp': 'N',
        'TieupFromTMS': '105',
        '_t_ds': 'd128521729933585-35d12852-0d12852',
        'J': '0',
        'bm_mi': '5E1C2BE7FC8D00EA11A584A69EA17CE9~YAAQn3MsMWgMVseSAQAA0K8TyBnBMU8PR/DpPAq+kDtdE0d8+KsZjIA7VHXOLF/6p6MxmL4Dr93TM3Nenx7OxDpjHafeE/du7xOCSGPno2zkc6icQGNikYjFKyRZxWW3sNidnLdO2uFVrnqcPqf4+hzVzLgfxZNDOux4HaYKUceYqRk7RNZO1C7dnbBZOXrmM2y8I7ZQTYRs1FHPIQHBUHhu6TG1+l/VN3KnQfYHVq6VbBFkbxYsC/qFbNmLWG4pis7lWJP0FBW0mbzDdMdpu6lD7rO8Ro/3UvJlIiUFe4aTsq0D17dJXoTyC/8Rxv+mfmJVMMIY06TbJ9oGjQEKPELdURca4A==~1',
        'ak_bmsc': 'E24BA82C3677B330651ABC1E91C7DF3E~000000000000000000000000000000~YAAQn3MsMc4MVseSAQAAObMTyBm7wqUeshhEEpU5r2XMMaXKRBtOswye43Xgea/Pbdr+sSlWLk+UEY+Tu2BkALLadrH+0UCtRVvjlfxsIC/xMwYDcfsgoxfmTuiUAVI8MIY4nTtzQQz/9cx2Vw8VxoR7tYGa8TA9qoY6RjAhFTphr1z8+xgivH9lLQ3AK3UZnLhQnlk6xAIey3uWZwvkEmzCgucAiIrbkqcRTg1irnTQ54QkXlP5v5K0okAx+028BMKe75XgLLOkEb1qeU+fMlIMasdMVwco0I3n1CcH8yOgyLJBRyHasuhMVv/GR22Gs8uNbkFqwPvetwE+9zyne/MptsjqXaEzIDrHl4ME2A7ukf/GM9SPHCnGiQKK88RDWCKV2o051V0NCWGDtZBOQVHiULmaudR/9Um5MXqkmennQhF50A8VOqx1K8ryRhLgiM3obQe1TJSHLXYM2QxhNPZszxgETWqJh5HzpB0WxyKGlbyiZjEVhD9mF0+XSy6qHaoJkQ7T6w==',
        '_gcl_au': '1.1.2123722798.1729933587',
        '_ga': 'GA1.1.1126059446.1729933587',
        'PHPSESSID': 'sjcefraf1hkrbtm3oih2t6csga',
        '_gcl_gs': '2.1.k1$i1729933593$u93512962',
        'nauk_at': 'eyJraWQiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJkZXZpY2VUeXBlIjoiZDNza3QwcCIsInVkX3Jlc0lkIjoyNzc5OTYxOTIsInN1YiI6IjI4OTA1ODgzNCIsInVkX3VzZXJuYW1lIjoia291c2hpa3JhbmdhNTFAZ21haWwuY29tIiwidWRfaXNFbWFpbCI6dHJ1ZSwiaXNzIjoiSW5mb0VkZ2UgSW5kaWEgUHZ0LiBMdGQuIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyOS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiaXBBZHJlc3MiOiIxNTIuNTguMTk2LjIzIiwidWRfaXNUZWNoT3BzTG9naW4iOmZhbHNlLCJ1c2VySWQiOjI4OTA1ODgzNCwic3ViVXNlclR5cGUiOiJqb2JzZWVrZXIiLCJ1c2VyU3RhdGUiOiJBVVRIRU5USUNBVEVEIiwidWRfaXNQYWlkQ2xpZW50IjpmYWxzZSwidWRfZW1haWxWZXJpZmllZCI6dHJ1ZSwidXNlclR5cGUiOiJqb2JzZWVrZXIiLCJzZXNzaW9uU3RhdFRpbWUiOiIyMDI0LTEwLTI2VDE0OjM2OjQyIiwidWRfZW1haWwiOiJrb3VzaGlrcmFuZ2E1MUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6InVzZXIiLCJleHAiOjE3Mjk5MzcyMDIsInRva2VuVHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNzI5OTMzNjAyLCJqdGkiOiI2OTdhODk3NDYyNzk0MDg1YmQ0YmJjZjJmYjkzOTRhMyIsInBvZElkIjoicHJvZC03NzQ5NWM0YjY5LWNwbmZyIn0.eJx7ySXrCAsuZznyvVHsIw8X7kOlN7nQc3hGR1y1zXVJjv36pE2TICr2bG5s_KT1DeTB2y5oisrrSVaog0nAOMb-v3ldFsqvqbAWCK6Qiz3s9ETvwGqdtH6uRDnysC6Lu3TQztoVdLlBY1xkA9mMDY71lErCgwUblXTZcqOTSRYBq9cQuVZ5bzmtV5v87inJ_Gre1j0kNOxpdVTWCFAtu1Pew_1scs_V8VtDtrwztXMQ6ZuwO3_3_92oWHUAtrjw08S-YPm5kQ0P25Ipa_pzBeGnqUVvpevGNNEKgUPsQVv_H7EqiDxgi0MpCzWm_Xx_6isiuOaDuj9fvmCmWE4dpw',
        'nauk_rt': '697a897462794085bd4bbcf2fb9394a3',
        'is_login': '1',
        'nauk_sid': '697a897462794085bd4bbcf2fb9394a3',
        'nauk_otl': '697a897462794085bd4bbcf2fb9394a3',
        'NKWAP': '9b86d8965eaca1466f7cef7f773942f7c99ff5d6bd8ebfa7dcc84c4ddb10dbeab8197ded423be680~9b86d8965eaca1466f7cef7f773942f7c99ff5d6bd8ebfa7dcc84c4ddb10dbeab8197ded423be680~1~0',
        'MYNAUKRI[UNID]': '3e2bed22bf974316a4ef0fd7f5e65e4a',
        'nauk_ps': 'default',
        'HOWTORT': 'ul=1729933623420&r=https%3A%2F%2Fwww.naukri.com%2Fmnjuser%2Fhomepage%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DBrand_Login_Register&hd=1729933624176&cl=1729933595665',
        '_gcl_aw': 'GCL.1729933624.Cj0KCQjwpvK4BhDUARIsADHt9sQLJl71asppD0NwTXtLLSQGw6mkAHyqkCdNcw8L2Cr3IBJp6u9pMNwaAksIEALw_wcB',
        '_gcl_dc': 'GCL.1729933624.Cj0KCQjwpvK4BhDUARIsADHt9sQLJl71asppD0NwTXtLLSQGw6mkAHyqkCdNcw8L2Cr3IBJp6u9pMNwaAksIEALw_wcB',
        '_ga_K2YBNZVRLL': 'GS1.1.1729933587.1.1.1729933624.23.0.0',
        'bm_sv': '0D98345104E50C013D8FF47514AC0D46~YAAQpXMsMYoQGnSSAQAAGkUUyBltV84Y4jDFiCJnAHjudGwgBhMeoPSr1s+kcV+ueSoSCoYTH+noGnlGXAzGmgNzDclOvS6rNMINzaLwJiSUvgUvpVBRXKZZ8aLeDkCxhnrm0pW1J0OZ3U5yMepM2RsX90Hq5P9d1rbByJG8wlsgFk94RJZSLkcTxReW2rhj4bFSTqEBP+pK2S3rfyNb5pX6Us9Zg/Uz6ke2k9j41L3KwVvK8U+xRMPVdqa0Rq3TKA==~1',
    }

    headers = {
        'accept': 'application/json',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7,te;q=0.6',
        'appid': '105',
        'authorization': 'Bearer eyJraWQiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJkZXZpY2VUeXBlIjoiZDNza3QwcCIsInVkX3Jlc0lkIjoyNzc5OTYxOTIsInN1YiI6IjI4OTA1ODgzNCIsInVkX3VzZXJuYW1lIjoia291c2hpa3JhbmdhNTFAZ21haWwuY29tIiwidWRfaXNFbWFpbCI6dHJ1ZSwiaXNzIjoiSW5mb0VkZ2UgSW5kaWEgUHZ0LiBMdGQuIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyOS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiaXBBZHJlc3MiOiIxNTIuNTguMTk2LjIzIiwidWRfaXNUZWNoT3BzTG9naW4iOmZhbHNlLCJ1c2VySWQiOjI4OTA1ODgzNCwic3ViVXNlclR5cGUiOiJqb2JzZWVrZXIiLCJ1c2VyU3RhdGUiOiJBVVRIRU5USUNBVEVEIiwidWRfaXNQYWlkQ2xpZW50IjpmYWxzZSwidWRfZW1haWxWZXJpZmllZCI6dHJ1ZSwidXNlclR5cGUiOiJqb2JzZWVrZXIiLCJzZXNzaW9uU3RhdFRpbWUiOiIyMDI0LTEwLTI2VDE0OjM2OjQyIiwidWRfZW1haWwiOiJrb3VzaGlrcmFuZ2E1MUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6InVzZXIiLCJleHAiOjE3Mjk5MzcyMDIsInRva2VuVHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNzI5OTMzNjAyLCJqdGkiOiI2OTdhODk3NDYyNzk0MDg1YmQ0YmJjZjJmYjkzOTRhMyIsInBvZElkIjoicHJvZC03NzQ5NWM0YjY5LWNwbmZyIn0.eJx7ySXrCAsuZznyvVHsIw8X7kOlN7nQc3hGR1y1zXVJjv36pE2TICr2bG5s_KT1DeTB2y5oisrrSVaog0nAOMb-v3ldFsqvqbAWCK6Qiz3s9ETvwGqdtH6uRDnysC6Lu3TQztoVdLlBY1xkA9mMDY71lErCgwUblXTZcqOTSRYBq9cQuVZ5bzmtV5v87inJ_Gre1j0kNOxpdVTWCFAtu1Pew_1scs_V8VtDtrwztXMQ6ZuwO3_3_92oWHUAtrjw08S-YPm5kQ0P25Ipa_pzBeGnqUVvpevGNNEKgUPsQVv_H7EqiDxgi0MpCzWm_Xx_6isiuOaDuj9fvmCmWE4dpw',
        'cache-control': 'max-age=0',
        'clientid': 'd3skt0p',
        'content-type': 'application/json',
        # 'cookie': 'HitsFromTieup=23531; wExp=N; TieupFromTMS=105; _t_ds=d128521729933585-35d12852-0d12852; J=0; bm_mi=5E1C2BE7FC8D00EA11A584A69EA17CE9~YAAQn3MsMWgMVseSAQAA0K8TyBnBMU8PR/DpPAq+kDtdE0d8+KsZjIA7VHXOLF/6p6MxmL4Dr93TM3Nenx7OxDpjHafeE/du7xOCSGPno2zkc6icQGNikYjFKyRZxWW3sNidnLdO2uFVrnqcPqf4+hzVzLgfxZNDOux4HaYKUceYqRk7RNZO1C7dnbBZOXrmM2y8I7ZQTYRs1FHPIQHBUHhu6TG1+l/VN3KnQfYHVq6VbBFkbxYsC/qFbNmLWG4pis7lWJP0FBW0mbzDdMdpu6lD7rO8Ro/3UvJlIiUFe4aTsq0D17dJXoTyC/8Rxv+mfmJVMMIY06TbJ9oGjQEKPELdURca4A==~1; ak_bmsc=E24BA82C3677B330651ABC1E91C7DF3E~000000000000000000000000000000~YAAQn3MsMc4MVseSAQAAObMTyBm7wqUeshhEEpU5r2XMMaXKRBtOswye43Xgea/Pbdr+sSlWLk+UEY+Tu2BkALLadrH+0UCtRVvjlfxsIC/xMwYDcfsgoxfmTuiUAVI8MIY4nTtzQQz/9cx2Vw8VxoR7tYGa8TA9qoY6RjAhFTphr1z8+xgivH9lLQ3AK3UZnLhQnlk6xAIey3uWZwvkEmzCgucAiIrbkqcRTg1irnTQ54QkXlP5v5K0okAx+028BMKe75XgLLOkEb1qeU+fMlIMasdMVwco0I3n1CcH8yOgyLJBRyHasuhMVv/GR22Gs8uNbkFqwPvetwE+9zyne/MptsjqXaEzIDrHl4ME2A7ukf/GM9SPHCnGiQKK88RDWCKV2o051V0NCWGDtZBOQVHiULmaudR/9Um5MXqkmennQhF50A8VOqx1K8ryRhLgiM3obQe1TJSHLXYM2QxhNPZszxgETWqJh5HzpB0WxyKGlbyiZjEVhD9mF0+XSy6qHaoJkQ7T6w==; _gcl_au=1.1.2123722798.1729933587; _ga=GA1.1.1126059446.1729933587; PHPSESSID=sjcefraf1hkrbtm3oih2t6csga; _gcl_gs=2.1.k1$i1729933593$u93512962; nauk_at=eyJraWQiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJkZXZpY2VUeXBlIjoiZDNza3QwcCIsInVkX3Jlc0lkIjoyNzc5OTYxOTIsInN1YiI6IjI4OTA1ODgzNCIsInVkX3VzZXJuYW1lIjoia291c2hpa3JhbmdhNTFAZ21haWwuY29tIiwidWRfaXNFbWFpbCI6dHJ1ZSwiaXNzIjoiSW5mb0VkZ2UgSW5kaWEgUHZ0LiBMdGQuIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyOS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiaXBBZHJlc3MiOiIxNTIuNTguMTk2LjIzIiwidWRfaXNUZWNoT3BzTG9naW4iOmZhbHNlLCJ1c2VySWQiOjI4OTA1ODgzNCwic3ViVXNlclR5cGUiOiJqb2JzZWVrZXIiLCJ1c2VyU3RhdGUiOiJBVVRIRU5USUNBVEVEIiwidWRfaXNQYWlkQ2xpZW50IjpmYWxzZSwidWRfZW1haWxWZXJpZmllZCI6dHJ1ZSwidXNlclR5cGUiOiJqb2JzZWVrZXIiLCJzZXNzaW9uU3RhdFRpbWUiOiIyMDI0LTEwLTI2VDE0OjM2OjQyIiwidWRfZW1haWwiOiJrb3VzaGlrcmFuZ2E1MUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6InVzZXIiLCJleHAiOjE3Mjk5MzcyMDIsInRva2VuVHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNzI5OTMzNjAyLCJqdGkiOiI2OTdhODk3NDYyNzk0MDg1YmQ0YmJjZjJmYjkzOTRhMyIsInBvZElkIjoicHJvZC03NzQ5NWM0YjY5LWNwbmZyIn0.eJx7ySXrCAsuZznyvVHsIw8X7kOlN7nQc3hGR1y1zXVJjv36pE2TICr2bG5s_KT1DeTB2y5oisrrSVaog0nAOMb-v3ldFsqvqbAWCK6Qiz3s9ETvwGqdtH6uRDnysC6Lu3TQztoVdLlBY1xkA9mMDY71lErCgwUblXTZcqOTSRYBq9cQuVZ5bzmtV5v87inJ_Gre1j0kNOxpdVTWCFAtu1Pew_1scs_V8VtDtrwztXMQ6ZuwO3_3_92oWHUAtrjw08S-YPm5kQ0P25Ipa_pzBeGnqUVvpevGNNEKgUPsQVv_H7EqiDxgi0MpCzWm_Xx_6isiuOaDuj9fvmCmWE4dpw; nauk_rt=697a897462794085bd4bbcf2fb9394a3; is_login=1; nauk_sid=697a897462794085bd4bbcf2fb9394a3; nauk_otl=697a897462794085bd4bbcf2fb9394a3; NKWAP=9b86d8965eaca1466f7cef7f773942f7c99ff5d6bd8ebfa7dcc84c4ddb10dbeab8197ded423be680~9b86d8965eaca1466f7cef7f773942f7c99ff5d6bd8ebfa7dcc84c4ddb10dbeab8197ded423be680~1~0; MYNAUKRI[UNID]=3e2bed22bf974316a4ef0fd7f5e65e4a; nauk_ps=default; HOWTORT=ul=1729933623420&r=https%3A%2F%2Fwww.naukri.com%2Fmnjuser%2Fhomepage%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DBrand_Login_Register&hd=1729933624176&cl=1729933595665; _gcl_aw=GCL.1729933624.Cj0KCQjwpvK4BhDUARIsADHt9sQLJl71asppD0NwTXtLLSQGw6mkAHyqkCdNcw8L2Cr3IBJp6u9pMNwaAksIEALw_wcB; _gcl_dc=GCL.1729933624.Cj0KCQjwpvK4BhDUARIsADHt9sQLJl71asppD0NwTXtLLSQGw6mkAHyqkCdNcw8L2Cr3IBJp6u9pMNwaAksIEALw_wcB; _ga_K2YBNZVRLL=GS1.1.1729933587.1.1.1729933624.23.0.0; bm_sv=0D98345104E50C013D8FF47514AC0D46~YAAQpXMsMYoQGnSSAQAAGkUUyBltV84Y4jDFiCJnAHjudGwgBhMeoPSr1s+kcV+ueSoSCoYTH+noGnlGXAzGmgNzDclOvS6rNMINzaLwJiSUvgUvpVBRXKZZ8aLeDkCxhnrm0pW1J0OZ3U5yMepM2RsX90Hq5P9d1rbByJG8wlsgFk94RJZSLkcTxReW2rhj4bFSTqEBP+pK2S3rfyNb5pX6Us9Zg/Uz6ke2k9j41L3KwVvK8U+xRMPVdqa0Rq3TKA==~1',
        'gid': 'LOCATION,INDUSTRY,EDUCATION,FAREA_ROLE',
        'origin': 'https://www.naukri.com',
        'priority': 'u=1, i',
        'referer': 'https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand_Login_Register',
        'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'systemid': 'Naukri',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    }

    json_data = {
        'clusterId': '',
        'clusterSplitDate': {
            'apply': '2024-03-09 21:54:19',
            'preference': '1980-01-01 05:30:00',
            'profile': '2024-04-09 12:06:23',
            'similar_jobs': '1980-01-01 05:30:00',
        },
        'src': 'recommClusterApi',
        'searches': None,
    }

    response = requests.post('https://www.naukri.com/jobapi/v2/search/recom-jobs', cookies=cookies, headers=headers, json=json_data)
    print(response) 
}


// # Note: json_data will not be serialized by requests
// # exactly as it was in the original request.
// #data = '{"clusterId":"","clusterSplitDate":{"apply":"2024-03-09 21:54:19","preference":"1980-01-01 05:30:00","profile":"2024-04-09 12:06:23","similar_jobs":"1980-01-01 05:30:00"},"src":"recommClusterApi","searches":null}'
// #response = requests.post('https://www.naukri.com/jobapi/v2/search/recom-jobs', cookies=cookies, headers=headers, data=data)

