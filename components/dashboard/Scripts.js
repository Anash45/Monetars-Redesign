export default function Scripts({ variant = "default" }) {
  return (
    <>
      <script src="/dashboard-assets/dist/js/jquery.min.js"></script>
      <script src="/dashboard-assets/slick/slick.js"></script>
      <script src="/vendor/popper/popper.min.js"></script>
      <script src="/dashboard-assets/dist/js/bootstrap.min.js"></script>
      <script src="/vendor/select2/js/select2.min.js"></script>
      {variant === "profile" && <script src="/vendor/chartjs/chart.min.js"></script>}
      <script src="/dashboard-assets/dist/js/script.js"></script>
    </>
  );
}
