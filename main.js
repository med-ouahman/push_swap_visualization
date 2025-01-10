const stackAEl = document.querySelector(".a");
const stackBEl = document.querySelector(".b");

const pa = document.getElementById("pa");
const sa = document.getElementById("sa");
const ra = document.getElementById("ra");
const rra = document.getElementById("rra");
const pb = document.getElementById("pb");
const sb = document.getElementById("sb");
const rb = document.getElementById("rb");
const rrb = document.getElementById("rrb");
const ss = document.getElementById("ss");
const rr = document.getElementById("rr");
const rrr = document.getElementById("rrr");
const instructionEl = document.getElementById("instructions");

const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
let inputs = "", stackA = [], stackB = [], instructions = 0;

do
{
	inputs = prompt("Enter the numbers: ");
	stackA = inputs.split(" ").map(num => {
			const int = Number(num);
			if (isNaN(int) || int > INT_MAX || int < INT_MIN || parseInt(int) !== int)
					return null;
			return int; 
	});
}
while (stackA.includes(null) || stackA.length !== [...new Set(stackA)].length);

fillStack(stackA, stackAEl);

function fillStack(nums, stack) {
	stack.innerHTML = null;
	for (let i = 0; i < nums.length; i++) {
			const el = document.createElement("div");
			el.classList.add("element");
			el.textContent = nums[i];
			stack.appendChild(el); 
	}
	instructionEl.innerHTML = instructions;
}

function push(stackFrom, stackTo) {
	if (stackFrom.length === 0)
			return ;
	stackTo.push(stackFrom.pop());
	++instructions;
}

function swap(stack) {
	const length = stack.length;
	if (length < 2)
			return ;
	const last = stack[length - 1];
	const secondLast = stack[length - 2];
	stack[length - 1] = secondLast;
	stack[length - 2] = last;
	++instructions;
}

function rotate(stack) {
	if (stack.length < 2)
			return ;
	const first = stack[0];
	const length = stack.length;
	for (let i = 1; i < stack.length; i++) {
			stack[i - 1] = stack[i];
	}
	stack[length - 1] = first;
	++instructions;
}

function reverseRotate(stack) {
	if (stack.length < 2)
			return ;
	const last = stack[stack.length - 1];
	for (let i = stack.length - 1; i > 0; i--) {
			stack[i] = stack[i - 1];
	}
	stack[0] = last;
	++instructions;
}

pa.addEventListener("click", () => {
	push(stackB, stackA);
	fillStack(stackB, stackBEl);
	fillStack(stackA, stackAEl);
});

pb.addEventListener("click", () => {
	push(stackA, stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
});

sa.addEventListener("click", () => {
	swap(stackA);
	fillStack(stackA, stackAEl);
});

sb.addEventListener("click", () => {
	swap(stackB);
	fillStack(stackB, stackBEl);
});

ra.addEventListener("click", () => {
	rotate(stackA);
	fillStack(stackA, stackAEl);
});

rb.addEventListener("click", () => {
	rotate(stackB);
	fillStack(stackB, stackBEl);
});

rra.addEventListener("click", () => {
	reverseRotate(stackA);
	fillStack(stackA, stackAEl);
});

rrb.addEventListener("click", () => {
	reverseRotate(stackB);
	fillStack(stackB, stackBEl);
});

rr.addEventListener("click", () => {
	rotate(stackA);
	rotate(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
});

ss.addEventListener("click", () => {
	swap(stackA);
	swap(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
});

rrr.addEventListener("click", () => {
	reverseRotate(stackA);
	reverseRotate(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
});