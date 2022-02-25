const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {

    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i]);
    // }

    // console.log('================')
    // is the same as the following forEach method below

    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);