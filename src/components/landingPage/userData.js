import { useState } from "react";
import Axios from "axios";
const UserData = () => {
  const [data, setData] = useState({
    yearOfBirth: "",
    gender: "",
    language: "",
    model: "",
  });

  const token =
    "eyJraWQiOiJ4VTlnZWdVaUhUd0FOK3lDOVRiaFhDcmdDOXZEK1dkNzlWOXVRa0VWVEIwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyamRsNGR1a2RvMzZsMGVuamZiNnA4OTViZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic29uZGUtcGxhdGZvcm1cL3N0b3JhZ2Uud3JpdGUgc29uZGUtcGxhdGZvcm1cL3VzZXJzLndyaXRlIHNvbmRlLXBsYXRmb3JtXC92b2ljZS1mZWF0dXJlLXNjb3Jlcy53cml0ZSBzb25kZS1wbGF0Zm9ybVwvdm9pY2UtZmVhdHVyZS1zY29yZXMucmVhZCIsImF1dGhfdGltZSI6MTY3NjczOTU0NywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfTmpQR3dkbGYwIiwiZXhwIjoxNjc2NzQzMTQ3LCJpYXQiOjE2NzY3Mzk1NDcsInZlcnNpb24iOjIsImp0aSI6ImFkZmZhNDhhLWJjMWEtNGE0My1hZjRkLTdjODE3OGVkMWU0MSIsImNsaWVudF9pZCI6IjJqZGw0ZHVrZG8zNmwwZW5qZmI2cDg5NWJkIn0.Ln9v_9oIJHcW_or7YFj0Jb9B3ljXMgHXHARpEHsXoqYVWlupSkVz9m5p31TAY-kEN7mMf-OCAl9VEW6l2Qy_FTvCiky9eFOgRkvRMjqiT9O13mKnvIYXiIB4Kb4QVyZfc_JXeXvtAIIs6dV8x9sC1-nAov6jMhRwTyCX7d-mvy6SQg_l_3xtqo0weAn9I8O34Zeu7ljF8qgsB3wcZDmZ0wre4xEFTrF7DrVrsZIEfm--OpWq5LRjsamQHsJGaAefHd1NW4OvLC40VjYZOwT5G5Gl2wQLOeWcxjqCbuhK31InITHVa4yj-xwxv3L1a_ZrA291dJNc-AVquNWi4_IgSw";
  const formChangeHandler = (event) => {
    setData((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    // const { yearOfBirth } = data;
    // const d = new Date(yearOfBirth);
    // const year = d.getFullYear();
    // const newData = { ...data, yearOfBirth: year };

    // console.log(newData);

    const res1 = await Axios.post(
      "https://api.sondeservices.com/platform/v1/oauth2/token",
      {
        grant_type: "client_credentials",
        scope:
          "sonde-platform/users.write sonde-platform/voice-feature-scores.write sonde-platform/voice-feature-scores.read sonde-platform/storage.write",
      },
      {
        headers: {
          Authorization:
            "Basic MmpkbDRkdWtkbzM2bDBlbmpmYjZwODk1YmQ6MXAyZnI4ZmxkOHRyc2lpdGsxdGF0NzJwY3FrdWtuYTg3ZW1yNzA3cWo1bjNsbHJsdjh1cA==",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const token = res1.data.access_token;

    const res2 = await Axios.post(
      "https://api.sondeservices.com/platform/v2/users",
      {
        yearOfBirth: "1995",
        gender: "MALE",
        language: "ENGLISH",
        device: {
          type: "MOBILE",
          manufacturer: "VIVO",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const uid = res2.data.userIdentifier;
      console.log("uid"+uid)
      console.log("token"+token)
    const res3 = await Axios.post(
      "https://api.sondeservices.com/platform/v1/storage/files",
      {
        fileType: "wav",
        countryCode: "IN",
        userIdentifier: uid,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const signedURL = res3.data.signedURL;
    const filePath = res3.data.filePath;
   
     
    console.log(filePath)
    console.log(signedURL)

    const file=new Blob(["./userAudioTry.wav"],{ type: 'application/octet-stream' })
    const formData = new FormData();
    formData.append('file', file, 'auido.bin');
    const res4 = await Axios.put(
      `${signedURL}`,
      formData,
      {
        headers: { "Content-Type": "audio/wave" },
      }
    );
    const res5 = await Axios.post(
      "https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores",
      {
        infer: [
          {
            type: "Acoustic",
            version: "v3",
          },
        ],
        userIdentifier: uid,
        filePath: filePath,
        measureName: "mental-fitness",
      },
      {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
      }
    );
   const jobid=res5.data.jobId
   console.log("jobid"+jobid)
  //  console.log(res5)
  //  let status="IN_PROGRESS"
  //     setTimeout(async()=>{
  //       while(true){
  //       setTimeout(async()=>{
  //         await Axios.get(`https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores/${jobid}`,
  //       {
  //         headers:{"Authorization": token}
  //       }
  //       )
  //       .then((res)=>console.log(res.data.status))
  //       },3000)
  //     }
  //     },15000)
// while(true){
      let res6;
  // console.log("timer started")
  // setTimeout(async()=>{
  //  console.log("inside set")
   res6= await Axios.get(`https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores/${jobid}`,
    {
      headers:{"Authorization": token}
    }
    )
    console.log(res6)
  // },13000)
  // while(true){
  //   // setTimeout(async()=>{
  //     res6= await Axios.get(`https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores/${jobid}`,
  //      {
  //        headers:{"Authorization": token}
  //      }
  //      )
  //      console.log(res6.data.status)
  //   //  },2000)
  // }
  

  
// }


    // console.log(res6)
    // console.log(token)
    // console.log(jobid)



    // const filePath = fileStorage.data.filePath;
    // console.log(filePath);
    // console.log(fileStorage.data.signedURL);

    // const response4 = await Axios.put(
    //   "https://prod-sondeplatform-in-subject-metadata.s3.amazonaws.com/ea6837b8-964a-41f1-9d93-27b0126f6fec/voice-samples/faf27a0a-bfe5-4f78-8fc2-e4ba102b03f4.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAW56LB7SFIPLRESFM%2F20230218%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230218T172736Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIFBTplEIvjwetCjTPN%2FxXrPQu8B5AmzQjltqWfPnHREaAiEA1Hl8pxhYAPlYpi4ctM5lc2UjL1l%2F5BNdnd5NARih1ogq0QMIexADGgw0NzY2MzAzNTA5ODYiDJJRPGsc9DoJRMvIvyquA38ncXmo%2BTrxJwD7NBFBBi9TgA35jLtcu85zOfDmDeIRaS3z87z2PkGHkmXUMxg%2FOjl%2FPJeYQeM0g898iVgzwYCF%2F0zbltX2Nm0eWdRpO%2Bx%2ByikTjYgbPblJEp3nuCRsVuT5zM%2FsFnadkU2SLuobZicQMfOpjDJOz8x7nuVfKCFVv9DfvD%2BHQfIWUvIjTD%2BP5Df2S%2FTtMePm7KnXknrC2KcFDSxlteF3sYhkCvxGXow3lySQ2WVUNN2VWzI3Nj2xguDL%2BZGsrkrixCXR7ORAqwYVjYM%2BNMiM9g9gY1UI00q1wDdy0V%2FvyiytCdh%2FXP85VH84oDw7AY9f8mtZMQhkyG0QS1GX4SpZ68mf%2BfoPiWzwJQinI56ZuWsr%2FIF3zd7bX3mhtDyepueG%2BOx%2FQ%2BxuC3MBa%2BZe1y1pMphK3dNxJ7ZaF8%2FEo9VNGpOEzmp11hZLIa5cZFZqZ5YmKubXOsGq9PaSWs91AWreW5%2BD6nhZeQRjAGJQvByZtgWmPuhemBHQMlmffHMiBrhESHurva%2Bx1UQg3rVaER6VI%2BkwKOmDnhLJcHS28MKh7EaH63iPCdcwyZTEnwY6ngHL3JUAHl%2BnOWOZ0ZqsZj1vK8x42szNlJ7avfkvoLskss3MY55VGGQMRs%2FLLVZB5xTXWg4KDSRNA86M3ojLkObRQviTq0AYSztrcUuDXjKyvW3dF497ArZOS0HlVnHJH7TCzuiM2Ngvfkpyc1zTKfsGH9%2FiUa73KRs1cqiDynivOON66047U3HposcNAYVfUBElt%2BIo1IXWYG87IyVBZQ%3D%3D&X-Amz-Signature=09087a017e3d360fb5a57addb5eef4740ef6433870886f9ff2d548b817c68a92",
    //   {}
    // );

    // const speech = await Axios.get(
    //   "https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores",
    //   {
    //     infer: [
    //       {
    //         type: "Acoustic",
    //         version: "v3",
    //       },
    //     ],
    //     userIdentifier: userId,
    //     filePath: filePath,
    //     measureName: "mental-fitness",
    //   },
    //   {
    //     headers: {
    //       Authorization: token,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // console.log(speech.data);
    // Axios.put(
    //   "https://prod-sondeplatform-in-subject-metadata.s3.amazonaws.com/ea6837b8-964a-41f1-9d93-27b0126f6fec/voice-samples/b85549d6-1861-4015-8a92-7949047c0144.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAW56LB7SFPWG7FEOK%2F20230221%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230221T051737Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLWVhc3QtMSJGMEQCIHzUKXGbjc2h2s7PNUA5cWWSgnJXxi1YppwHND25az95AiBt5D6RrFDG9ukul%2B5iMBdPoonS69%2FMQa0QED0ZpobWjiraAwi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDQ3NjYzMDM1MDk4NiIMyzxbbPB4RpkTB%2Bn5Kq4Dvs%2Fuvs22Twqp2dDEq4bjQxEPzfUi8qC6BN2UxcrMoXTIZZsoIlYjrtcmZUezKfVRvu9cn0ANrA8SV1%2F0478pZxKavlEXh5fIV6a%2BjY6JTXO48w%2BxsmC%2BEr54Eh2MP%2FGX0UVcAUmHV1DIg9oCYDDFlwLr9msDw0IA%2F%2Fcnm09Midr9sfOj%2BFs2BlnZQ72Al%2FKpX4AjIosAlhMiJoSqDCG46xq2Tx44J0YzZCQsTK75YmSblL%2BPxDXhkYHoS%2B06Plft7f%2FatGgnciCOOMrw7RTCSYTBtk0KPQpWc%2BX9EEZJ1gm%2BTH9JYy5ufy%2BJpKwPUlP6aZkHufzOO2v%2FCv68Ti2Nl5NloYc1%2B6RToKttf7mZsiTI7LiK1GVsn%2FGAEkip35XI05Fx65AgcfJVvUma%2BOjM%2FS8mcQ655%2BUP%2FRq0h7w9sB2373HnSlYk5Cqf5SJMu3UgbDfHxWuOGUwkv%2Bkq4rTirZRde1FZJpgan10qiuVYN1xLOpkvD7fUBrZs%2F9dOqrLqXc8mN%2BCqfKBvqGNo%2FFkYcNqmkPDtKjtAbe58KtvJTiM41GiTBBZ7%2FLXbhQtPpTCHodGfBjqfAQymDzFVgwZKG5InH4xjGNFi4da15%2F3FwrVUQRxuo2i8jVhPUK7QdGAk92lYL81yUTRn%2BcqSkp0v7ejg7pBb61fSlZrm67rMimefmHu%2FJu8iEHwePOBLbxMEZRjl8%2F3ofSFFQz6xGMwGpIzEXFwJkfYywr%2FQzZ9liPOzQ7YUF7r4S1H%2FjuyDNtT8RveGVDJ0djr2xyeaza1ItkiIHOiZDw%3D%3D&X-Amz-Signature=5d93e01b855d99738ee8413b883f4c9a62b682e7899a01f860f56db5a6925a4b",
    //   {
    //     data: Buffer.from(
    //       "blob:http://localhost:3000/c47a51df-e1b5-4efe-b07b-71c96e19ccf2"
    //     ),
    //   },
    //   {
    //     header,
    //   }
    // );

    // Axios.post(
    //   "https://api.sondeservices.com/platform/async/v1/inference/voice-feature-scores",
    //   {
    //     infer: [
    //       {
    //         type: "Acoustic",
    //         version: "v3",
    //       },
    //     ],
    //     userIdentifier: "cf3c30ea4",
    //     filePath: "./audioFile.wav",
    //     measureName: "mental-fitness",
    //   },
    //   {
    //     headers: {
    //       Authorization:
    //         "eyJraWQiOiJ4VTlnZWdVaUhUd0FOK3lDOVRiaFhDcmdDOXZEK1dkNzlWOXVRa0VWVEIwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyamRsNGR1a2RvMzZsMGVuamZiNnA4OTViZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic29uZGUtcGxhdGZvcm1cL3N0b3JhZ2Uud3JpdGUgc29uZGUtcGxhdGZvcm1cL3VzZXJzLndyaXRlIHNvbmRlLXBsYXRmb3JtXC92b2ljZS1mZWF0dXJlLXNjb3Jlcy53cml0ZSBzb25kZS1wbGF0Zm9ybVwvdm9pY2UtZmVhdHVyZS1zY29yZXMucmVhZCIsImF1dGhfdGltZSI6MTY3Njk1NjQ0MiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfTmpQR3dkbGYwIiwiZXhwIjoxNjc2OTYwMDQyLCJpYXQiOjE2NzY5NTY0NDIsInZlcnNpb24iOjIsImp0aSI6Ijk2NzA0MWJmLTkyZWMtNDI4Yi1iZDJmLTczYzc3ZWM1Nzk2MCIsImNsaWVudF9pZCI6IjJqZGw0ZHVrZG8zNmwwZW5qZmI2cDg5NWJkIn0.Bx3Jkc1-Nm6NMAcrMVsKJRzhi2XWZhI8OhrOobqf_QAnkp9WO9PKYeqsJXXn8RCcrJIIcOEwaxS6BumiSezUD38ZS5-rU6JnQv4HD-7tJBmGGr66U1MS9EeDxbRJEHZgjt-BbbqEShaTUUXd4m1z9CQySV-E7I-XNseo5Wcis75kbemMoXCyIXiOA4pM4O5FQONLFYUtwKyjHEfjZ3Hl9SMnxifGkiqHhw05M2qUyDj9txdVKpM0hcYWc5MtWks6DtBFHg6eR5YfxByfxd759tKeh2GhOH61JGqKsYzD-La3ASn0gOK5-nttXOA6iunNFal1nkWaocI-9cDYEdfnfQ",
    //       contentType: "application/json",
    //     },
    //   }
    // ).then((res) => console.log(res));
  };
  return (
    <div>
      <h1 className="text-xl font-bold font-sans">Give us Your details</h1>
      <form onSubmit={submitHandler} className="p-20">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="yearOfBirth"
          type="date"
          placeholder="Date of Birth"
          onChange={formChangeHandler}
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="gender"
          type="text"
          placeholder="Your gender"
          onChange={formChangeHandler}
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="language"
          type="text"
          placeholder="Speaking Language"
          onChange={formChangeHandler}
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id=""
          type="text"
          placeholder="Desktop Model"
          onChange={formChangeHandler}
        />
        <button
          className=" text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-bold uppercase mt-5 w-full py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default UserData;
