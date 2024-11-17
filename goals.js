let checkGoals =  [false, false, false, false];

function replaceGoalContent(new_goal, goal_details, num_stars) {
    for (let i = 0; i < checkGoals.length; i++) {
        if (checkGoals[i] === false) {
            checkGoals[i] = true;
            let goal = document.querySelector(`.goal-info.goal${i + 1}`);
            goal.querySelector("h1").innerText = new_goal;
            goal.querySelector("p").innerText = goal_details;
            const star_1 = document.querySelector(`.goal${i + 1}_star1 svg path`);
            const star_2 = document.querySelector(`.goal${i + 1}_star2 svg path`);
            const star_3 = document.querySelector(`.goal${i + 1}_star3 svg path`);
            if (num_stars === 1) {
                star_1.style.fill = "white";
                star_2.style.fill = "white";
                star_3.style.fill = "#EAD327";
            }
            else if (num_stars === 2) {
                star_1.style.fill = "white";
                star_2.style.fill = "#EAD327";
                star_3.style.fill = "#EAD327";
            }
            else {
                star_1.style.fill = "#EAD327";
                star_2.style.fill = "#EAD327";
                star_3.style.fill = "#EAD327";
            }
            break;
        }
    }
}

document.getElementById("10-into-savings").addEventListener("click", () => {
    replaceGoalContent("Put $10 per week into savings.", "1-3 Weeks | Saving", 2);
});
document.getElementById("20-eating-out").addEventListener("click", () => {
    replaceGoalContent("Spend <$20 Eating Out.", "< 1 Week | Budgeting", 3);
});
document.getElementById("no-unnecessary").addEventListener("click", () => {
    replaceGoalContent("Do not buy unnecessary things.", "1 Month+ | Spending", 1);
});