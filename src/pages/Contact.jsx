import contactStyles from './Contact.module.scss';

const Contact = () => {
  return (
    <main className={contactStyles.contact}>
      <a
        className={`${contactStyles.channel} ${contactStyles.mail}`}
        href="mailto:contact@antonbalog.com?subject=Hello%20from%20antonbalog.com"
        aria-label="Send Anton an email"
      >
        <svg
          className={contactStyles.icon}
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zM127.6 194.1l64.1 49.1-64.1 64.1V194.1zm.2 150.1 84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z" />
        </svg>
      </a>

      <a
        className={`${contactStyles.channel} ${contactStyles.linkedin}`}
        href="https://www.linkedin.com/in/antonbalog/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Anton’s LinkedIn profile"
      >
        <svg
          className={contactStyles.icon}
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5S118 161.5 118 142.4s15.3-34.5 34.2-34.5 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H402V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h-0.2z" />
        </svg>
      </a>
    </main>
  );
};

export default Contact;