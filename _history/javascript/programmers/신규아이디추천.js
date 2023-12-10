// function isValid(input_id) {
//   let proc_input_id = input_id
//     .replace("-", "")
//     .replace("_", "")
//     .replace(".", "")
//     .replace(/[a-z]/g, "");
//   let rule01 = 3 <= input_id.length <= 15;
//   let rule02 = input_id.toLowerCase() == input_id && proc_input_id == "";
//   let rule03 = !input_id.startsWith(".") || !input_id.endsWith(".");

//   if (rule01 && rule02 && rule03) {
//     return true;
//   }
//   return false;
// }

function step2(input_id) {
  let remove_irrelavant = "";
  for (let i = 0; i < input_id.length; i++) {
    if (/[0-9a-z]/g.test(input_id[i])) {
      remove_irrelavant += input_id[i];
    } else if (
      input_id[i] === "_" ||
      input_id[i] === "." ||
      input_id[i] === "-"
    ) {
      remove_irrelavant += input_id[i];
    }
  }
  return remove_irrelavant;
}

function step3and4(input_id) {
  let removed_dots = "";
  for (let i = 0; i < input_id.length; i++) {
    if (removed_dots == "") {
      if (input_id[i] == ".") {
        continue;
      }
      removed_dots += input_id[i];
      continue;
    }
    if (removed_dots[removed_dots.length - 1] == "." && input_id[i] == ".") {
      continue;
    }
    if (i == input_id.length - 1 && input_id[i] == ".") {
      continue;
    }
    removed_dots += input_id[i];
  }
  if (removed_dots.endsWith(".")) {
    removed_dots = removed_dots.slice(0, removed_dots.length - 1);
  }
  return removed_dots;
}

function step6or7(input_id) {
  let step6_7 = input_id;
  if (input_id.length >= 16) {
    step6_7 = input_id.slice(0, 15);
    if (step6_7.endsWith(".")) {
      step6_7 = step6_7.slice(0, 14);
    }
  } else if (input_id.length <= 2) {
    do {
      step6_7 += step6_7[input_id.length - 1];
    } while (step6_7.length < 3);
  }
  return step6_7;
}

function solution(new_id) {
  let answer = "";
  let after_step_1 = new_id.toLowerCase();
  let after_step_2 = step2(after_step_1);
  let after_step_3_4 = step3and4(after_step_2);
  let after_step_5 =
    after_step_3_4 === "" ? (after_step_3_4 += "a") : after_step_3_4;

  if (3 <= after_step_5.length && after_step_5.length <= 15) {
    answer = after_step_5;
  } else {
    answer = step6or7(after_step_5);
  }

  return answer;
}

// 우수 코드
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 우수 코드
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
