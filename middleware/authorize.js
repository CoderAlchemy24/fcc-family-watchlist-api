export const authorizeModification = (req, res, next) => {
  const user = req.user;
  const isParent = user?.role === "parent";
  const isChildModifyingOwnData =
    user?.role === "child" &&
    String(req.params.userId) === String(user.id);

  if (!isParent && !isChildModifyingOwnData) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
};