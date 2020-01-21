const { WebClient } = require('@slack/web-api');
const slackClient = new WebClient(process.env.SLACK_TOKEN);
const channelId = 'C0AT2K09K';

const Send = async message => {
  await slackClient.chat.postMessage({ channel: channelId, text: message });
};

export default (req, res) => {
  const {
    body: { name, email, message },
    method,
  } = req;

  if (method === 'POST') {
    (async () => {
      try {
        await Send(`${name} - ${email} says: ${message}`);
      } catch (error) {
        res.status(500).json({ message: 'Error sending message.' });
      }
    })();

    res.status(200).json({ message: 'Message successfully sent.' });
  }

  // method isn't allowed so return 405
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }
};
