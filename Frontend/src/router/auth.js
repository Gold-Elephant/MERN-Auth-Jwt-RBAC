export default function auth({ next, router }) {
  if (!localStorage.getItem("info")) {
    return router.push({ name: "login" });
  }
  return next();
}
