const fs = require("fs");
const [VE, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const [V, E] = VE.split(" ").map((ele) => +ele);
const edgeArr = arr.map((ele) => ele.split(" ").map((number) => +number));

let parent = Array.from({ length: V + 1 }, (_, idx) => idx);
let result = 0;

edgeArr.sort((a, b) => a[2] - b[2]);

const findParent = (x) => {
  if (parent[x] != x) parent[x] = findParent(parent[x]);
  return parent[x];
};

const unionParent = (a, b) => {
  a = findParent(a);
  b = findParent(b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

for (const [a, b, cost] of edgeArr) {
  if (findParent(a) != findParent(b)) {
    unionParent(a, b);
    result += cost;
  }
}

console.log(result);
