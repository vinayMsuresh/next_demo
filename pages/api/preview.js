export default function preview(req, res) {
  res.setPreviewData({ user: " Vinay" });
  res.redirect(req.query.redirect);
}
