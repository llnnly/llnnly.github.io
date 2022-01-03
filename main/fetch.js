//#P0QV8LRJ0

// const url = 'https://api.brawlstars.com/v1/players/%23P0QV8LRJ0/battlelog'
// const apiKey = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZjZWEwYjcxLTg1ODEtNDM3NC05ZjIxLWIyZjNiODBkZGI3MCIsImlhdCI6MTYyMTI1MDczMCwic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkzLjEwOS4yNDYuOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ARcrKJctJlK3PxOTlMO1XclKw8KT3Qp-DMvjzTlf50hQLUhuZRg183Ily48bTP69qYBZhxTXZWcg4_g2tgeE-g'
//
// let response = fetch(url, {
//     headers: {
//         Authentication: apiKey
//     }
// })
//
// if (response.ok) {
//     let json = response.json();
// } else {
//     console.log(response.status)
// }


const url = 'https://api.brawlstars.com/v1/players/%23P0QV8LRJ0/battlelog';
//const apiKey = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZjZWEwYjcxLTg1ODEtNDM3NC05ZjIxLWIyZjNiODBkZGI3MCIsImlhdCI6MTYyMTI1MDczMCwic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkzLjEwOS4yNDYuOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ARcrKJctJlK3PxOTlMO1XclKw8KT3Qp-DMvjzTlf50hQLUhuZRg183Ily48bTP69qYBZhxTXZWcg4_g2tgeE-g'

keys = [
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZmYjFhYmY2LWU5YTMtNDY4Zi1hOWUwLTFiMzRiYzAwYzg4MCIsImlhdCI6MTYyOTI4NzgwNywic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjE5OS4xMDguMTUzIl0sInR5cGUiOiJjbGllbnQifV19.J9lNDVYp2H-qnn-NiPap6tHaOkcG4CzIwQLgBGqfLQFgIKIlUfYUrqFzls9MFcvc3DTPU9bPNKmxlig4mh4Egg',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJlY2NhNzU3LTM4NWYtNDU2ZC1hMjkyLTNkM2ExZGNlY2E1NyIsImlhdCI6MTYyOTI4Nzk1OSwic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjE5OS4xMDkuMTUzIl0sInR5cGUiOiJjbGllbnQifV19.prTmQCrl0-KMYZV40rHH8C9PzuFfqT8b7rT51KUabCJbgQyu_l9I5ZqS2dKD1O2a_Cyaq8z9LNFa8u6z_t6HBg',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI0YmU5Yzk1LTM0Y2YtNGMyYy05ZmUzLWE4MjI1ZWJiOTdjOCIsImlhdCI6MTYyOTI4Nzk4OSwic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjE5OS4xMTAuMTUzIl0sInR5cGUiOiJjbGllbnQifV19.4Y6ZZO4myGiahRODsMDObaL697AW5W0GdwNjOSkNcSU1ETwIBL04Qgu6t0OWkQPO9T48oZbbeVZC8j1uVREo1g',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkwN2ZlMGY3LWMzMTctNDFkMy1iNGFjLWRkMTdjOGQ5NGM3NiIsImlhdCI6MTYyOTI4ODAxMiwic3ViIjoiZGV2ZWxvcGVyL2Y4ZDc4ODM4LTcwM2UtZWUzZS1kY2I2LTIzNTI2MzBiNmQyYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjE5OS4xMTEuMTUzIl0sInR5cGUiOiJjbGllbnQifV19.n1j6OuQqm9YIwx7O7zZXvFvashMifQcz9YmES5e_CLXCGuub1z2PJqNAMngL0x_TnsPs6ZmSX_ZJMKisXGrfaw'
]


const apiKey = 'Bearer' + keys[0]
const headers = {
    headers: {
        authorization: apiKey
    }
}

let getResponse = async(url, apiKey) => {
    const response = await fetch(url, {
        headers: {
            authorization: apiKey,
            Accept: 'application/json'
        }
    });
    if (response.ok) {
        return await response.json();
    } else {
        console.log('Error no: ' + response.status);
    }
}

for(let i=0; i<3; i++) {
    const apiKey = 'Bearer' + keys[i]
    console.log(getResponse(url, apiKey))
}
