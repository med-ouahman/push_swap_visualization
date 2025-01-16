const stackAEl = document.querySelector(".a");
const stackBEl = document.querySelector(".b");
const printInstructionsEl = document.querySelector(".print-instructions");
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

function fillStack(stack, stackEl) {
	stackEl.innerHTML = null;
	for (let i = 0; i < stack.length; i++) {
		const el = document.createElement("div");
		el.classList.add("element");
		el.textContent = stack[i];
		stackEl.appendChild(el); 
	}
	instructionEl.innerHTML = instructions;
}

function printInstructions(instruction) {
	
	printInstructionsEl.innerHTML +=
	`
	<div class="instruction">
		<p>${instruction}</p>
	</div>
	`;
	
}

function push(stackFrom, stackTo) {
	if (stackFrom.length === 0)
			return ;
	stackTo.unshift(stackFrom.shift());
	++instructions;
}

function swap(stack) {
	const length = stack.length;
	if (length < 2)
			return ;
	[stack[0], stack[1]] = [stack[1], stack[0]];
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
	if (stackB.length)
		printInstructions("pa");
	push(stackB, stackA);
	fillStack(stackB, stackBEl);
	fillStack(stackA, stackAEl);
	
});

pb.addEventListener("click", () => {
	if (stackA.length)
		printInstructions("pb");
	push(stackA, stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
	
});

sa.addEventListener("click", () => {
	swap(stackA);
	fillStack(stackA, stackAEl);
	if (stackA.length > 1)
		printInstructions("sa");
});

sb.addEventListener("click", () => {
	swap(stackB);
	fillStack(stackB, stackBEl);
	if (stackB.length > 1)
		printInstructions("sb");
});

ra.addEventListener("click", () => {
	rotate(stackA);
	fillStack(stackA, stackAEl);
	if (stackA.length > 1)
		printInstructions("ra");
});

rb.addEventListener("click", () => {
	rotate(stackB);
	fillStack(stackB, stackBEl);
	if (stackB.length > 1)
		printInstructions("rb");
});

rra.addEventListener("click", () => {
	reverseRotate(stackA);
	fillStack(stackA, stackAEl);
	if (stackA.length > 1)
		printInstructions("rra");
});

rrb.addEventListener("click", () => {
	reverseRotate(stackB);
	fillStack(stackB, stackBEl);
	if (stackB.length > 1)
		printInstructions("rrb");
});

rr.addEventListener("click", () => {
	rotate(stackA);
	rotate(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
	if (stackA.length > 1 || stackB.length > 1)
		printInstructions("rr");
});

ss.addEventListener("click", () => {
	swap(stackA);
	swap(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
	if (stackA.length > 1 || stackB.length > 1)
		printInstructions("ss");
});

rrr.addEventListener("click", () => {
	reverseRotate(stackA);
	reverseRotate(stackB);
	fillStack(stackA, stackAEl);
	fillStack(stackB, stackBEl);
	if (stackA.length > 1 || stackB.length > 1)
		printInstructions("rrr");
});
