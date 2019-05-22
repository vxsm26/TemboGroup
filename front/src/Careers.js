import React, { Component } from "react";

class Careers extends Component {
  render() {
    return (
      <div>
        <div align="center" className="careersUpDown">
          Join our team of smart, passionate, diverse idealist<br/>
          who are on a mission to change the world.
        </div>
        <div className="careersTable">
          <table cellSpacing="0">
            <tbody>
              <tr>
                <td bgcolor="#cce6ff"><b>Engagement Manager</b></td>
              </tr>
              <tr>
                <td>The Engagement Manager will primary responsibility for managing daily interaction, workflow, timelines and deliverables. This is an ideal position for someone who has excellent people skills, a love of structure, and who is detail oriented but does not miss the big picture.</td>
              </tr>
              <tr bgcolor="#f2f2f2">
                <td><br/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="careersTable">
          <table cellSpacing="0">
            <tbody>
              <tr>
                <td bgcolor="#cce6ff"><b>Executive Assistant</b></td>
              </tr>
              <tr>
                <td>The Tembo Group is seeking an Executive Assistant to support our Managing Director and perform a variety of administrative tasks across the organization. The ideal candidate is dynamic, entrepreneurial, highly organized and an excellent internet sleuth and problem solver. They are self- motivated, professional, and capable of managing their work load and prioritizing tasks in a fast-paced start-up environment.</td>
              </tr>
              <tr bgcolor="#f2f2f2">
                <td><br/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div align="center" className="careersUpDown">
          Are you interested in something short-term or part time?<br/>
          Tembo is always looking for whip smart consultants to join specific projects, and have a rolling intership program.<br/>
          If you're interestedin either opportunity please submit a letter of interest and CV to jobs@tembogroup.org
        </div>
      </div>
    );
  }
}

export default Careers;
