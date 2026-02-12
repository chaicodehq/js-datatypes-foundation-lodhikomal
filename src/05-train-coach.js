/**
 * 🚂 Train Coach Finder - Array Search & Check
 *
 * Indian Railways ke train mein passengers dhundhne hain!
 * Passenger list mein search karna hai — kaun hai, kaun nahi,
 * sab confirmed hain ya nahi. Array search methods ka tour hai yeh!
 *
 * Data format: passengers = [
 *   { name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
 *   { name: "Priya", coach: "S3", seat: 15, status: "waitlisted" },
 *   ...
 * ]
 *
 * Methods to explore: .find(), .findIndex(), .some(), .every(), .filter()
 *
 * Functions:
 *
 *   1. findPassenger(passengers, name)
 *      - .find() se passenger object dhundho by name (case-insensitive)
 *      - Agar passengers array nahi hai ya name string nahi hai, return undefined
 *      - Example: findPassenger([{name:"Rahul",coach:"S5",seat:42,status:"confirmed"}], "rahul")
 *                 => {name:"Rahul", coach:"S5", seat:42, status:"confirmed"}
 *
 *   2. getPassengerIndex(passengers, name)
 *      - .findIndex() se passenger ka position nikalo (case-insensitive)
 *      - Agar passengers array nahi hai ya name string nahi hai, return -1
 *      - Example: getPassengerIndex([{name:"Rahul"}, {name:"Priya"}], "Priya") => 1
 *
 *   3. isAnyWaitlisted(passengers)
 *      - .some() se check karo ki koi bhi passenger "waitlisted" hai ya nahi
 *      - Agar passengers array nahi hai ya empty hai, return false
 *      - Example: isAnyWaitlisted([{status:"confirmed"}, {status:"waitlisted"}]) => true
 *
 *   4. areAllConfirmed(passengers)
 *      - .every() se check karo ki SAB passengers "confirmed" hain ya nahi
 *      - Agar passengers array nahi hai ya empty hai, return false
 *      - Example: areAllConfirmed([{status:"confirmed"}, {status:"confirmed"}]) => true
 *
 *   5. getWaitlistedPassengers(passengers)
 *      - .filter() se sirf "waitlisted" passengers return karo
 *      - Agar passengers array nahi hai, return []
 *      - Example: getWaitlistedPassengers([{name:"A",status:"confirmed"},{name:"B",status:"waitlisted"}])
 *                 => [{name:"B", status:"waitlisted"}]
 *
 * @example
 *   findPassenger(passengers, "Rahul")   // => { name: "Rahul", ... }
 *   isAnyWaitlisted(passengers)          // => true/false
 *   areAllConfirmed(passengers)          // => true/false
 * 
 */


export function findPassenger(passengers, name) {
  const checkArray = Array.isArray(passengers)

  if (!checkArray || typeof name !== "string") {
    return undefined
  }
  const findItem = passengers.find((item) => (item.name).toLowerCase() === name.toLowerCase());
  // console.log(findItem, "kk")
  return findItem

  // Your code here
}


export function getPassengerIndex(passengers, name) {
  // Your code here
  const checkArray = Array.isArray(passengers)

  if (!checkArray || typeof name !== "string") {
    return -1
  }
  const position = passengers.findIndex((item => (item.name).toLowerCase() === name.toLocaleLowerCase()))
  console.log(position, "hjhj")
  return position
}
//  *
//  * 3. isAnyWaitlisted(passengers)
//   * - .some() se check karo ki koi bhi passenger "waitlisted" hai ya nahi
//     * - Agar passengers array nahi hai ya empty hai, return false
//       * - Example: isAnyWaitlisted([{ status: "confirmed" }, { status: "waitlisted" }]) => true
export function isAnyWaitlisted(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) {
    return false
  }
  const checkWaitingList = passengers.some((item) => item.status === "waitlisted")
  return checkWaitingList ? true : false;
  // Your code here
}

export function areAllConfirmed(passengers) {
  // Your code here
  if (!Array.isArray(passengers) || passengers.length === 0) {
    return false
  }

  const checkStatus = passengers.every((item) => item.status === "confirmed")
  return checkStatus;

}

export function getWaitlistedPassengers(passengers) {
  // Your code here
  if (!Array.isArray(passengers)) {
    return []
  }
  const getWaitingList = passengers.filter((item) => item.status === "waitlisted")
  return getWaitingList
}
