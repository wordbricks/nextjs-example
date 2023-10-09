# Next.js Sample Task

## 1) Run project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open the link in your browser [http://localhost:3000](http://localhost:3000)

## 2) Project Environment

1. next.js 14, react 18
2. typescript


## 3) Objective
1. place two 'textarea', and one 'button' 

2. Receive user input from the left textarea

   - [Advanced] Validate user input (length, Format)

3. Return reversed text (eg. cat -> tac) in the right textarea when user clicks the button

   - [Advanced] User server `/api` 

6. Display input histories 

7. Additional features
   1. Like button for the input text

      - [Advanced] Maximum one like per user

   2. Delete user input history

   3. Undo 'delete' action

      - [Advanced] redo 'delete' action

      - [Advanced] Enable Shortcut key (ctrl + z or cmd + z)

   4. Show word count below the test area 


**We do not evaluate the followings**

1. Improve UI using css -> We only care wether the feature works or not

2. Quality of code (Code pattern, modulization, commit logs... ) -> We want you to prioritize speed during this interview and not worry about anything else.

3. Writing all the code from scratch  -> You can also utilize Google, Stack Overflow, Copilot, and copy-paste as needed.


## 4) Expected Outcomes

[Sample](./Sample.png)



## 5). (Tips)  You'll probably be editing the following pages.

1. `pages/index.tsx`
2. [Advnaced] `api/hello.ts`
