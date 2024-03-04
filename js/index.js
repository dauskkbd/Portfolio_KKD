function toggle_tech_used_bloodborne() {
  var tech_used_bloodborne = document.getElementById("tech_used_bloodborne");
  var see_more_text_bloodborne = document.getElementById(
    "see_more_text_bloodborne"
  );

  if (tech_used_bloodborne.classList.contains("show")) {
    tech_used_bloodborne.classList.remove("show");
    see_more_text_bloodborne.textContent = "See Tech Used";
  } else {
    tech_used_bloodborne.classList.add("show");
    see_more_text_bloodborne.textContent = "See Less";
  }
}

function toggle_tech_used_3g() {
  var tech_used_3g = document.getElementById("tech_used_3g");
  var see_more_text_3g = document.getElementById("see_more_text_3g");

  if (tech_used_3g.classList.contains("show")) {
    tech_used_3g.classList.remove("show");
    see_more_text_3g.textContent = "See Tech Used";
  } else {
    tech_used_3g.classList.add("show");
    see_more_text_3g.textContent = "See Less";
  }
}

function toggle_tech_used_rollnplay() {
  var tech_used_rollnplay = document.getElementById("tech_used_rollnplay");
  var see_more_text_rollnplay = document.getElementById(
    "see_more_text_rollnplay"
  );

  if (tech_used_rollnplay.classList.contains("show")) {
    tech_used_rollnplay.classList.remove("show");
    see_more_text_rollnplay.textContent = "See Tech Used";
  } else {
    tech_used_rollnplay.classList.add("show");
    see_more_text_rollnplay.textContent = "See Less";
  }
}

function toggle_tech_used_cae() {
  var tech_used_cae = document.getElementById("tech_used_cae");
  var see_more_text_cae = document.getElementById("see_more_text_cae");

  if (tech_used_cae.classList.contains("show")) {
    tech_used_cae.classList.remove("show");
    see_more_text_cae.textContent = "See Tech Used";
  } else {
    tech_used_cae.classList.add("show");
    see_more_text_cae.textContent = "See Less";
  }
}
