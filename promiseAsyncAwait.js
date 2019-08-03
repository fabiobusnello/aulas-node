// Promises
const request = require("request");

const getPromise = url =>
  new Promise((resolve, reject) => {
    request.get(url, (error, response) => {
      if (error) {
          console.log(error.stack)
        return reject(`caralho deu ruim! olha isso... ${error.stack}`);
      }
      try {
        resolve(JSON.parse(response.body));
      } catch (error) {
        reject(error);
      }
    });
  });

const get = async url => {
  const response = await getPromise(url).catch(Promise.reject)
  return response
};

get('https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02')
  .then(response => console.log(response))
  .catch(error => console.log("deu ruin ==>", error));

// exemplo de callback forma antiga
function oldMethod(data, cb) {
  setTimeout(function() {
    cb(null, data);
  }, 1000);
}

oldMethod("magno", function(error, data) {
  console.log(data);
});

const mesmoMethodComPromise = () => {
  return new Promise((resolve, reject) => {
    oldMethod("abel", (err, successData) => {
      resolve(successData);
    });
  });
};

mesmoMethodComPromise().then(console.log);

// const myFirstPromise = () => {
//     return new Promise ((resolve, reject)=>{
//         myPromise().then(data => {
//             resolve(data)
//         })
//     })
// }

// const myPromise = () => {
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(true)
//         }, 1000)
//     })
// }

// const myMethodSimple = () => {
//     console.log('show de bola0')
// }

// myFirstPromise().then(data => {console.log(data)})

// myMethodSimple()
