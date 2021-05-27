import React from 'react';
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
  import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

const Share=()=>{

    return (
        <>

        {/* facebook share  sunil jo url send karna hai wo url me paste kar do  */}
        <FacebookShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <FacebookIcon size={32} localfillcolor="white" round={true}>

            </FacebookIcon>
        </FacebookShareButton>


        {/* whatsapp share */}

        <WhatsappShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <WhatsappIcon size={32} localfillcolor="white" round={true}>

            </WhatsappIcon>
        </WhatsappShareButton>

        {/* twitter share */}

        <TwitterShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <TwitterIcon size={32} localfillcolor="white" round={true}>

            </TwitterIcon>
        </TwitterShareButton>

        {/*telegram share  */}

        <TelegramShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <TelegramIcon size={32} localfillcolor="white" round={true}>

            </TelegramIcon>
        </TelegramShareButton>

        {/* Linkdin share */}

        <LinkedinShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <LinkedinIcon size={32} localfillcolor="white" round={true}>

            </LinkedinIcon>
        </LinkedinShareButton>

      {/* Email share */}

      <EmailShareButton url="http://localhost:3000"
        quote={"share"}
        hashtag="#React"
        >
            <EmailIcon size={32} localfillcolor="white" round={true}>

            </EmailIcon>
        </EmailShareButton>

        </>
    )

}
export default Share;
