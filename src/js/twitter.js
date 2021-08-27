import axios from "axios";
import members from "./members.js";

function getTwitterProfile(twitterID) {
  try {
    if (!twitterID) {
      return;
    }

    axios
      .get(
        "https://api.twitter.com/2/users/by/username/" +
          twitterID.replace("@", "").trim() +
          "?user.fields=profile_image_url",
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAOtrTAEAAAAA6T%2Bt1i77Abzx93%2B2Q3g%2BCcVadJc%3DCIAHuWyWqLzPdYZpQdqutUiQYd3c3e1Xfp7AccIvzOriLguQo4",
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log("response");
        console.log(response);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log("error");
        console.log(error);
      })
      .then(function () {
        // always executed
        //console.log(twitterID);
      });
  } catch (e) {
    console.log("e");
    console.log(e);
  }
}

// return @map
export default async function getProfiles() {

  var membersImages = new Map();

  members.forEach((member) => {
    const memberImg = getTwitterProfile(member);
    if (memberImg !== null) {
      membersImages.set(member, getTwitterProfile(member));
    }

  });

  console.log(membersImages);

  return membersImages;
}
