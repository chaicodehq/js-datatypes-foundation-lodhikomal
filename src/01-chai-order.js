/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  if (typeof (order) !== "string") {
    return -1

  }
  else {
    const result = order.trim().length
    return result;

  }
}

export function shoutChaiOrder(order) {
  if (typeof order !== "string") {
    return ""
  }
  else {
    const result = order.trim()
    if (result.length === 0) {
      return ""
    }
    else {
      return result.toUpperCase()
    }


  }
}

export function whisperChaiOrder(order) {
  if (typeof order !== "string") {
    return ""
  }
  else {
    const result = order.trim()
    if (result.length === 0) {
      return ""
    }
    else {
      return result.toLowerCase()
    }


  }
}
// hasSpecialIngredient(order, ingredient)
//   * - Check karo ki order mein koi special ingredient hai ya nahi
//     * - Dono ko.toLowerCase() karo, phir.includes() use karo
//       * - Agar koi bhi string nahi hai, return false
//         * - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
//           *

export function hasSpecialIngredient(order, ingredient) {

  if (!ingredient) return false;

  return (order.toString().toLowerCase()).includes(ingredient?.toString()?.toLowerCase())




  // Your code here

}

export function getFirstAndLastChar(order) {

  if (typeof order !== "string") {
    return null
  }
  else {
    const result = order.trim()
    if ((result.length === 0) || (typeof result !== "string")) {
      return null
    }
    else {
      const trimmed = order.trim()

      const first = trimmed.charAt(0)
      const last = trimmed.at(-1)

      return { first, last }
    }


  }



}
