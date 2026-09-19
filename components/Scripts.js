export default function Scripts({ variant = "default" }) {
  return (
    <>
      <script src="/assets/dist/js/jquery.min.js"></script>
      <script src="/assets/slick/slick.js"></script>
      {variant === "earn" && <script src="/vendor/popper/popper.min.js"></script>}
      <script src="/assets/dist/js/bootstrap.min.js"></script>
      {variant === "earn" && <script src="/vendor/select2/js/select2.min.js"></script>}
      {variant === "profile" && <script src="/vendor/chartjs/chart.min.js"></script>}
      <script src="/assets/dist/js/script.js"></script>
    </>
  );
}
