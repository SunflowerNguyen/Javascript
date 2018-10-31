var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

readFilePromise('math.object.js')
    .then(function(data) {
        console.log(data);
    })
    .then(function(data2) {
        console.log(data2);
    })
    .catch(function(error) {
        console.log(error);
    });


// function tra_tien_em_anh_oi() {
//     return new Promise(function(resolve, reject) {
//             var isHappy = Math.random() >= 0.5;
//         if (isHappy) {
//           var tien = 1000;
//           return resolve(tien); //  Promise dc fulfilled  
//           }

//         var reason = 'lịt pẹ bố dek trả đấy làm gì nhau';
//           reject(reason); //  Promise ở trạng thái reject
//     });
//   }

//    function nhau_an_mung(tien){
//            console.log("Tien nhau duoc: " + tien);
//      return new Promise(function(resolve, reject) {
//               var tienMaxa = tien -400;
//         return resolve(tienMaxa)
//      })
//    }

//    function mat_xa(tien){
//            console.log("Tien mat xa duoc: " + tien);
//            return new Promise(function(resolve, reject) {
//           var tienConLai = 0;
//         return resolve(tienConLai)
//       })
//    }

//     function hue_oi(tien){
//            console.log("Tien con lai " + tien);
//    }

//    tra_tien_em_anh_oi() 
//     .then(function(tiennhau) {
//       return nhau_an_mung(tiennhau);
//     })
//     .then(function(tienmatxa){
//       return mat_xa(tienmatxa);
//     })
//     .then(function(tienconlai){ // het tien 
//       return hue_oi(tienconlai);
//     })
//     .catch(function(reason){
//         console.log(reason);
//     });