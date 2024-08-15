const express = require('express');
const { default: mongoose } = require("mongoose");
require("dotenv").config() // importer les variables d'envirement 
const Person = require("./src/models/person")

const app = express(); // instance de l'application express

const MONGO_URI=process.env.MONGO_URI
const PORT = process.env.PROT
//connect de mongodb
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//check if connection is succefull
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
     });

//      // Create a new Person
// const newPerson = new Person({
//     name: 'Azyz',
//     age: 31,
//    favoriteFoods: ['Pizza', 'Burger']
//   });

//   // Save the person to the database
//   newPerson.save()
//   .then(person => {
//   console.log('Person saved:', person);
//  })
//   .catch(err => {
// console.error(err);
//  });

//  // Define an array of persons data
// const arrayOfPersons = [
//     {
//         name: "Khaled",
//         age: 34,
//        favoriteFoods: ["Sushi", "Chocolate"],
//      },
//      {
//         name: "Dali",
//       age: 24,
//      favoriteFoods: ["Pizza", "Ice Cream"],
//     },
//      {
//         name: "Ijlel",
//        age: 35,
//       favoriteFoods: ["Burger", "Pasta"],
//     },
//    ];

//    // Create several persons using Model.create()
// Person.create(arrayOfPersons)
// .then((createdPersons) => {
//  console.log("Persons created:", createdPersons);
// })
// .catch((err) => {
//  console.error(err);
//  });

// // Define the name you want to search for
// const searchName = 'Khaled';
// //  Use Model.find() to search for Persons with the given name
//  Person.find({ name: searchName })
// .then(foundPersons => {
//    console.log(`Persons with name '${searchName}' :`, foundPersons);
// })
// .catch(err => {
//    console.error(err);
//    })

// // Define the food you want to search for
// const searchFood = 'Pizza';

// //Model.findOne() to find a person with the given food in their favorites
// Person.findOne({ favoriteFoods: searchFood })
//  .then(foundPerson => {
//    console.log(`Person with '${searchFood}' in favorites:`, foundPerson);
//    })
//   .catch(err => {
//     console.error(err);
//    })

// // Define the personId you want to search for
// const personId = '66be324842fca0b39d5146e3';

// // Use Model.findById() to find a person with the given id
// Person.findById(personId)
//  .then(foundPerson => {
//    console.log(`Person with _id '${personId}':`, foundPerson);
// })
//  .catch(err => {
//    console.error(err);
// })


// // // Define the personId you want to search for
// const personId = '66be332988bb585de56486c2';

// // Use Model.findById() with promises to find a person with the given id
// Person.findById(personId)
// .then(foundPerson => {
//  if (!foundPerson) {
//      console.log(`Person with _id '${personId}' not found.`);
//     return;
//    }

//     // Add "shan tounsi" to the list of favoriteFoods
//     foundPerson.favoriteFoods.push('shan tounsi');
//      // Save the updated Person
//  return foundPerson.save();
//   })
//  .then(updatedPerson => {
//  if (updatedPerson) {
//      console.log(`Person with _id '${personId}' updated:`, updatedPerson);
//  }
// })
// .catch(err => {
// console.error(err);
//    })
//   .finally(() => {
//     // Close the MongoDB connection after the operation
//    mongoose.connection.close();
//   });

// // Define the personName you want to search for
// const personName = 'Azyz';

// // Use Model.findOneAndUpdate() to find a person by name and update their age to 20
//  Person.findOneAndUpdate(
//   { name: personName },
//   { name: "mohamed aziz" },
//   { new: true } // This option returns the updated document
// )
//    .then(updatedPerson => {
//    if (!updatedPerson) {
//       console.log(`Person with name '${personName}' not found.`);
//       return;
//     }

//      console.log(`Person with name '${personName}' updated:`, updatedPerson);
//   })
//   .catch(err => {
//     console.error(err);
//    })
//   .finally(() => {
//     mongoose.connection.close();
//    });

// const personId = '66be324842fca0b39d5146e3'; // Replace with the actual _id value you're searching for

// // Use Model.findOneAndDelete() to delete one person by _id and retrieve the removed document
// Person.findOneAndDelete({ _id: personId })
//  .then(removedPerson => {
//   if (!removedPerson) {
//    console.log(`Person with _id '${personId}' not found.`);
//    return;
//     }

//  console.log(`Person with _id '${personId}' removed:`, removedPerson);
// })
//    .catch(err => {
//    console.error(err);
//    })
//    .finally(() => {
//     mongoose.connection.close();
//  });



// // Use Model.deleteMany() to delete all people with the name "Charlie"
// Person.deleteMany({ name: 'khaled' })
// .then(result => {
//   console.log(`Number of people named 'Khaled' deleted:, result.deletedCount`);
//  })
//  .catch(err => {
//    console.error(err);
//  })
// .finally(() => {
// // Close the MongoDB connection after the operation
//   mongoose.connection.close();
// });

// // Chain search query helpers to find people who like burritos
// Person.find({ favoriteFoods: 'burritos' })
//   .sort('name')   // Sort the results by name
//   .limit(2)       // Limit the results to two documents
//   .select('-age') // Hide their age
//   .exec()
//   .then(data => {
//     console.log('People who like burritos:', data);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });



// Démarrer le serveur
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});

