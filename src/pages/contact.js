import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <form method="post" action="https://blog-sport-git-tutorial-part-four.ceul1barth.now.sh/contact">
      <div>
        <label for="name">Name : <abbr>*</abbr></label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label for="email">Email : <abbr>*</abbr></label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label for="message">Message <abbr>*</abbr></label>
        <textarea name="message" id="message" rows="5" />
      </div>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </Layout>
)
