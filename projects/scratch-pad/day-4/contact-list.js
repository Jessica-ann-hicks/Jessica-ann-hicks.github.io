// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an Object that has the argument ids as well as values keys matching their names
    
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
    /*  First Im going to add all the keys attached to function() so I can visualize how many key:/value functions I have
       making sure to add commas after each because makeContactList is a collection of key/value pairs, thus an object
     * 
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        /*  Takes a contact Object to be ADDED to the contact-list
         * First idea: use .push becuase it adds values to the end of an array
        */
        addContact: function (contact) {
            
            contacts.push(contact);
            
        },
        /* Needs a fullname string to find conact
            *Must combine firstName and lastName
            *First idea: use a for loop to search through the contacts array
        */
        findContact: function (fullName) {
            //first must combine name
            
            //for loop to search through contacts
            for (var i = 0; i < contacts.length; i ++) {
                
            }
            return contacts[i];
        },
        //
        
        removeContact: function (contact) {
            
        },
        //
        printAllContactNames: function () {
            
        }
        
        
        
        
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
