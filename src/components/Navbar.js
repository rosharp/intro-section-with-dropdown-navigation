export default function navbar() {
  return (
    <nav>
      <img className="logo-img" src="/images/logo.svg" />
      <ul className="main-nav">
        <li>
          <a href="">Features</a>
          <ul>
            <li><a href='#'><span><img src="/images/icon-todo.svg" /></span>Todo List</a></li>
            <li><a href='#'><span><img src="/images/icon-calendar.svg" /></span>Calendar</a></li>
            <li><a href='#'><span><img src="/images/icon-reminders.svg" /></span>Reminders</a></li>
            <li><a href='#'><span><img src="/images/icon-planning.svg" /></span>Planning</a></li>
          </ul>
        </li>
        <li>
          <a href="">Company</a>
          <ul>
            <li><a href='#'>History</a></li>
            <li><a href='#'>Team</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </li>
        <li><a href="">Career</a></li>
        <li><a href="">About</a></li>
      </ul>
      <ul className="login-nav">
        <li><a href="">Login</a></li>
        <li><a href="">Register</a></li>
      </ul>
    </nav>
  );
}
