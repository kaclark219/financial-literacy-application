let checkRewards =  [false, false];

function replaceRewardContent(new_reward, num_stars) {
    for (let i = 0; i < checkRewards.length; i++) {
        if (checkRewards[i] === false) {
            checkRewards[i] = true;
            let reward = document.querySelector(`.r${i + 1} .left-reward`);
            reward.querySelector("p").innerText = new_reward;
            let stars = document.querySelector(`.r${i + 1} .star-cost p`);
            stars.innerText = num_stars;
            break;
        }
    }
}

document.getElementById("coffee").addEventListener("click", () => {
    replaceRewardContent("Treat myself to a coffee.", 3);
});
document.getElementById("trip").addEventListener("click", () => {
    replaceRewardContent("Go on a trip with a friend.", 20);
});
document.getElementById("walk").addEventListener("click", () => {
    replaceRewardContent("Go on a nice walk.", 1);
});


// custom goal
document.getElementById("add-custom-goal").addEventListener("click", () => {
    const description = document.querySelector("input[placeholder='Type here!']").value.trim();
    const stars = document.querySelector("input[placeholder='Put a number here!']").value.trim();
    if (!description || !stars) {
        alert("Please fill out all fields to add a goal!");
        return;
    }
   
    replaceRewardContent(description, stars);
});