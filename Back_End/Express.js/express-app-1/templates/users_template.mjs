/**
 * create the user template fot the (users.ejs) view
 * @param {{ id: number, username: string, pin: string, admin: boolean }[]} users
 * @returns { string }
 */
export const users_template = (users) => {
  let usersHTML = "";

  users.forEach((user) => {
    usersHTML += `
    <fieldset class="user">
      <legend></legend>
      <div class="records">
        <div class="record">
          <span>Id:</span> <span>${user.id}</span>
        </div>
        <div class="record">
          <span>Username:</span> <span>${user.username}</span>
        </div>
        <div class="record">
          <span>PIN:</span> <span>${user.pin}</span>
        </div>
        <div class="record">
          <span>Admin:</span> <span>${user.admin}</span>
        </div>
      </div>
    </fieldset>
      `;
  });
  return usersHTML;
};
