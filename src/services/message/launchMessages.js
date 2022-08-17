import Alert from "sweetalert2";

export const launchSuccessMessage = async () => {
  return await Alert.fire({
    icon: "success",
    title: `Sucesso`,
    text: "Operação realizada com sucesso",
  });
};

export const launchErrorMessage = async (text) => {
  return await Alert.fire({
    icon: "error",
    title: `Erro na operação!`,
    text: text,
  });
};