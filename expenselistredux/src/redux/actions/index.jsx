export const registerUser = (data) => {
  console.log(data, "i am data from actions");
  return {
    type: "REGISTER_USER",
    data: data,
  };
};
