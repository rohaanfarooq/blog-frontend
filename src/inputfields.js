import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";

export const loginfields = [
  {
    icon: <EmailIcon className="icon" />,
    name: "email",
    type: "text",
    placeholder: "Email",
  },

  {
    icon: <LockIcon className="icon" />,
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

export const signupfields = [
  {
    icon: <PersonIcon className="icon" />,
    name: "name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    icon: <EmailIcon className="icon" />,
    name: "email",
    type: "text",
    placeholder: "Email",
  },

  {
    icon: <LockIcon className="icon" />,
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];
