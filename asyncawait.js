const getUserfromDB = (userid) => {
    return new Promise((resolve, reject) => {
        const fakeDB = {
            1: { name: 'Alice', age: 25 },
            2: { name: 'Bob', age: 30 },
            3: { name: 'Charlie', age: 35 }
        };
        setTimeout(() => {  
            const user = fakeDB[userid];
            if (user) {
                resolve(user);
            } else {
                reject(new Error(`User ${userid} not found`));
            }
        }, 1000);
    });
};

getUserfromDB(2)
    .then(user => {
        console.log('User found:', user);
    })
    .catch(err => {
        console.error('Error:', err.message);
    }); 


    const fetchData = async (userid) => {
        try {
            const result = await getUserfromDB(userid);    
            console.log('User found:', result);
        } catch (err) {
            console.error('Error:', err.message);
        }       

    };

fetchData(2);
fetchData(5);           

