import { query } from "@/lib/db";
import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const { username, password } = await req.body;
  // const url = `https://api.github.com/users/${username}`;
  try {
    if (!username) {
      return res.status(400).json({ message: '`username` required' })
    }
    const results = await query(
      `
      SELECT *
      FROM users
      WHERE name = ?
      and password = ?
    `, [
      username, password]
    )
    if (results.length > 0){
      // we check that the user exists on GitHub and store some data in session
      // const { login, avatar_url: avatarUrl } = await fetchJson(url);
      const user = { isLoggedIn: true, results };
      req.session.set("user", user);
      await req.session.save();
      res.json(user);
    }else{
      res.status(500);
      res.json("error")
    }

   
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);

  }
});
