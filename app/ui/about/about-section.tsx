import ImageSlider from './image-slider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const images = [
    'https://s3-alpha-sig.figma.com/img/a57e/d21c/37f825801210abf12281f82a79d49467?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASH78D9MfPDpM2XLhiQwOwtVjldpy3cWzn73a-8BKFWCRk7ovkOdnKQhAo-DwYRqyq32qP3BgHxl5DH1RkMpDKds3ppTjbzyjCuxG5OEb24aYZcxwUGcWJQrozWKQqJ2OPmw5v1Giy4afbaz3jGg69zjQKiGpiWkkb8QCRslA7Wt8HCd2mAVpQfqKIXJgVpn1lPvBpZ4wQDnIl2814RPym4AW7FiZEHLIic8o6smERFDR9LL3ZoWISf-PX5qi75WFcs0OnHPYRWEkCdp370744l6wwD2mwaQAt-N7jRZ9q5ZSSXG7Nu-QsxWqEFeFYp85r1QIasSfHNha0cCm5bBaA__',
    'https://s3-alpha-sig.figma.com/img/53de/d97a/f2325ad41c4d0053a21164644ca06e82?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnsqn3syKeYI0A0bWyU6BnN07gy5FtIFQ5ag5GciaDQYyM1Iy2IpIVHb75nTuryfD1BUX7Clgu7blFBKeyvfGsztEhMvhIQ9QsdRFBBR9DpEN6IaX92x2aci0akhaM8L8I0T5-rONV6D4DuShwbzOcH2xQtrCoegfjRAVXmCP8EBEqpyuIqlt07AcRnor8IhE4PDohf8bSIeCk0t83DDYyelzmNv-ExDPklr-cgokCmoywkGFv-R5SIPlv0y3W5oR~4nK3wq8~r-oT0Jo8MCI0s8edSr0eP795Jhpo82dxhVEc5pC6xgAZ0DLNLFlDdsow6mSyay4QXn~Ei1sRBsgw__',
    'https://s3-alpha-sig.figma.com/img/5f3e/8e3b/0562ed4fbf35c35ed77b63b42330cac6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edKOZ9oozeJst~Uny0XehMO~F84Qh-WwFy~XHpJWI0pbTcV5C2wVpMp~W7FdiQMeCr9qFY3qLklzrezOoCxZxR9iuJkfkekN8ePH97pUvkPVbPT1eeeTBBsb9IKHe6d~0F5MPsnQ39g6~7wAggrMdAsPM9vTr-ESwhkSBTXy5n6bxLKaVeE5fWKLr0Wgpa2oF1PjDIi-LJIMvn4E29xtZAsXYKvHwD5GV6cbX5Yx5Bh7V-N4V574lcmqshg4S95ahQohbJPdtmCQE34yPVCjmFULqzGHDShPDKhydLrUIUoHLbqZTzblJtceqD3VlxC~a58P4ekIqwaMnnnLCuYENg__',
    'https://s3-alpha-sig.figma.com/img/cc46/a1f6/70b7a39e5201f5dce9c5787cc9506277?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSV82u1Nvd1x-2z5ifvDKh0jn8pywq6N5FW1Do1tAJBtQjnP-p4klqZOV8HARTWyaI53orGeodfkVW3InMFc5cv0iaH7MMEPWmtzdFIIYBxaRS3SZ7zFDVqDuB8K8Cp-OW4cQG2vKoRAP26rKsD3c3u0yowW02yLp135EDEG3IDFQcpdA2Ma2VHNB17RlTtmfwyOX8jyjsXLQ2kHV8zopu10aYHAVZfx2U~o5IpzQ1EINd56a67XjDGoKo54Eo9rM9n1mh8WTFN9i0V2UiDif8ulRBPxSLoH5qsAJdHIXgM7kaa0RQIzGGlWUaGi2LRKCKq2FYh~qZo7lbikCzxlUg__',
    //
    'https://s3-alpha-sig.figma.com/img/f39f/f860/7438d2151bd94d45def4c8b58c06b961?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1cfsf3e9lf-3woyREZTyTdcgf2SgZiSdW~tu~iHUKUMT23~KVYUvRmyA8TsmshR~Y-BKOoYATpKceJscCb~bZD-2sn8os7mZxGWMU-G0LXEzbHHLMfk9rGcjMRr3tYvCTGXZB8P37iNs17EVYWJKubEGVo-PdvDIZrUcblMmOF5AagZQRCMGH1c2BjLRaLrZ9e7VGZMNPFCe3ZUXyS1gp7OKT08N2f4peYU2aVvYujKKVSlbEdg8IIvJD8DqRjn39Xz13cCN1YneGxlgEaIoFztLXRMs5J4SMDhcbsZfaej73etaJCcBJnPFw93PqR~wA6~U9jaycBXT9R4ttph3A__',
    'https://s3-alpha-sig.figma.com/img/90f1/f0d9/b30e817e750d4f95a131093653e9ab98?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mvv8~AiNV2pFwVucv~u~s0f7bgCa9chedRj9SfyubRYeAfe6YOsXXIskU7PXGayP2EdeMdF7o4v79~D6Vi~P6zpcZhpvOIU3YoB18sYDWpbZFpc~J-40ZS92bWbqnREPX2fvI5CvUqnDjIsVLlm8azyl8JJhgSdiAfOtvqpVqh9f6fYo0rTi8lSu7X4v0MpdovUQwSII35SrzRSay-maEXcNstigKQYMFdxocgiOFWdr5Zq~GvLxObjDaUu5mb6XQVPtiKqUUkq2X-0EEaqSz2~aJ3XMFdN8HyjUbbrmIOtporkTF4RfWnVtewDgWGd75hZkGWq-EN4mEdsmcTGGeQ__',
    'https://s3-alpha-sig.figma.com/img/0ce7/acac/2c5f13bd4bfa8aaf570bac35d4c07b12?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jh9l~hvqTEF3iQeLM79aC8NBfW~8C3MBwNYWLQX8L-BoszLr7beomHLu3HrznHncxAqzQtzL3sdc-VrEhKPEpWTCHfEesH8iDEIpjc8d8leFdRWIIFFl-ikV-QsMLflhn2aTNk1Iq1Yw13D8-9g8r3hYCdWVgB4~PUb1YqI2BCo5MU2Uz6ySAuvONAO6t-6CQnhLDzvmwf-g-hUebeKuFgbVfEQ07nX863ZcKcXPGJTmZtBbAYdYZR8Hb96~qGn1mThy1g6zZfwfFkJ6PqPyrq~6L-VhkB7nAHuvfxL~KqGMVvhf9zj0pdgr4KqQze7LY8JzpRW1LbXAcHriNlKCxQ__',
    'https://s3-alpha-sig.figma.com/img/f89d/d380/8c39ff8b1b4736e60e9215e7eb75ddb6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXLOWblclRi7bCvdY7kL8yq2C3xnGrIeCgnVSTdvVtMUSaOjxBh-4j3Rn-HogZrzOEeO0Orh19ucvDvBQvpzBZ2MWzyFucwOLNpyZKsxdmpb-LNwN-Woi2RfNJv2dL1BTgE7R-q4umOY7M9vq1lVvPD6-7FIHvu96-rx4uoYUY~GMuqK7H4IFXCZGJwizlyk9rdeo2jNJgZBvy9N9eGki~pjwddaTGnVBwim8jvoDqgz-W~Kxi~USmbbcRhe8ru2BsPHgriI7kvnNcpxuJdEBIkl6439h0feczcfr2My4nxTgOEY5KzSP6q8GzUNuE2yZIUtPQWwAlglsO8gn2oQfQ__',
    'https://s3-alpha-sig.figma.com/img/a57e/d21c/37f825801210abf12281f82a79d49467?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASH78D9MfPDpM2XLhiQwOwtVjldpy3cWzn73a-8BKFWCRk7ovkOdnKQhAo-DwYRqyq32qP3BgHxl5DH1RkMpDKds3ppTjbzyjCuxG5OEb24aYZcxwUGcWJQrozWKQqJ2OPmw5v1Giy4afbaz3jGg69zjQKiGpiWkkb8QCRslA7Wt8HCd2mAVpQfqKIXJgVpn1lPvBpZ4wQDnIl2814RPym4AW7FiZEHLIic8o6smERFDR9LL3ZoWISf-PX5qi75WFcs0OnHPYRWEkCdp370744l6wwD2mwaQAt-N7jRZ9q5ZSSXG7Nu-QsxWqEFeFYp85r1QIasSfHNha0cCm5bBaA__',
    'https://s3-alpha-sig.figma.com/img/53de/d97a/f2325ad41c4d0053a21164644ca06e82?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnsqn3syKeYI0A0bWyU6BnN07gy5FtIFQ5ag5GciaDQYyM1Iy2IpIVHb75nTuryfD1BUX7Clgu7blFBKeyvfGsztEhMvhIQ9QsdRFBBR9DpEN6IaX92x2aci0akhaM8L8I0T5-rONV6D4DuShwbzOcH2xQtrCoegfjRAVXmCP8EBEqpyuIqlt07AcRnor8IhE4PDohf8bSIeCk0t83DDYyelzmNv-ExDPklr-cgokCmoywkGFv-R5SIPlv0y3W5oR~4nK3wq8~r-oT0Jo8MCI0s8edSr0eP795Jhpo82dxhVEc5pC6xgAZ0DLNLFlDdsow6mSyay4QXn~Ei1sRBsgw__',
    'https://s3-alpha-sig.figma.com/img/5f3e/8e3b/0562ed4fbf35c35ed77b63b42330cac6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edKOZ9oozeJst~Uny0XehMO~F84Qh-WwFy~XHpJWI0pbTcV5C2wVpMp~W7FdiQMeCr9qFY3qLklzrezOoCxZxR9iuJkfkekN8ePH97pUvkPVbPT1eeeTBBsb9IKHe6d~0F5MPsnQ39g6~7wAggrMdAsPM9vTr-ESwhkSBTXy5n6bxLKaVeE5fWKLr0Wgpa2oF1PjDIi-LJIMvn4E29xtZAsXYKvHwD5GV6cbX5Yx5Bh7V-N4V574lcmqshg4S95ahQohbJPdtmCQE34yPVCjmFULqzGHDShPDKhydLrUIUoHLbqZTzblJtceqD3VlxC~a58P4ekIqwaMnnnLCuYENg__',
    'https://s3-alpha-sig.figma.com/img/cc46/a1f6/70b7a39e5201f5dce9c5787cc9506277?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSV82u1Nvd1x-2z5ifvDKh0jn8pywq6N5FW1Do1tAJBtQjnP-p4klqZOV8HARTWyaI53orGeodfkVW3InMFc5cv0iaH7MMEPWmtzdFIIYBxaRS3SZ7zFDVqDuB8K8Cp-OW4cQG2vKoRAP26rKsD3c3u0yowW02yLp135EDEG3IDFQcpdA2Ma2VHNB17RlTtmfwyOX8jyjsXLQ2kHV8zopu10aYHAVZfx2U~o5IpzQ1EINd56a67XjDGoKo54Eo9rM9n1mh8WTFN9i0V2UiDif8ulRBPxSLoH5qsAJdHIXgM7kaa0RQIzGGlWUaGi2LRKCKq2FYh~qZo7lbikCzxlUg__',
]

const secondImageSlider = [
    'https://s3-alpha-sig.figma.com/img/f39f/f860/7438d2151bd94d45def4c8b58c06b961?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1cfsf3e9lf-3woyREZTyTdcgf2SgZiSdW~tu~iHUKUMT23~KVYUvRmyA8TsmshR~Y-BKOoYATpKceJscCb~bZD-2sn8os7mZxGWMU-G0LXEzbHHLMfk9rGcjMRr3tYvCTGXZB8P37iNs17EVYWJKubEGVo-PdvDIZrUcblMmOF5AagZQRCMGH1c2BjLRaLrZ9e7VGZMNPFCe3ZUXyS1gp7OKT08N2f4peYU2aVvYujKKVSlbEdg8IIvJD8DqRjn39Xz13cCN1YneGxlgEaIoFztLXRMs5J4SMDhcbsZfaej73etaJCcBJnPFw93PqR~wA6~U9jaycBXT9R4ttph3A__',
    'https://s3-alpha-sig.figma.com/img/90f1/f0d9/b30e817e750d4f95a131093653e9ab98?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mvv8~AiNV2pFwVucv~u~s0f7bgCa9chedRj9SfyubRYeAfe6YOsXXIskU7PXGayP2EdeMdF7o4v79~D6Vi~P6zpcZhpvOIU3YoB18sYDWpbZFpc~J-40ZS92bWbqnREPX2fvI5CvUqnDjIsVLlm8azyl8JJhgSdiAfOtvqpVqh9f6fYo0rTi8lSu7X4v0MpdovUQwSII35SrzRSay-maEXcNstigKQYMFdxocgiOFWdr5Zq~GvLxObjDaUu5mb6XQVPtiKqUUkq2X-0EEaqSz2~aJ3XMFdN8HyjUbbrmIOtporkTF4RfWnVtewDgWGd75hZkGWq-EN4mEdsmcTGGeQ__',
    'https://s3-alpha-sig.figma.com/img/0ce7/acac/2c5f13bd4bfa8aaf570bac35d4c07b12?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jh9l~hvqTEF3iQeLM79aC8NBfW~8C3MBwNYWLQX8L-BoszLr7beomHLu3HrznHncxAqzQtzL3sdc-VrEhKPEpWTCHfEesH8iDEIpjc8d8leFdRWIIFFl-ikV-QsMLflhn2aTNk1Iq1Yw13D8-9g8r3hYCdWVgB4~PUb1YqI2BCo5MU2Uz6ySAuvONAO6t-6CQnhLDzvmwf-g-hUebeKuFgbVfEQ07nX863ZcKcXPGJTmZtBbAYdYZR8Hb96~qGn1mThy1g6zZfwfFkJ6PqPyrq~6L-VhkB7nAHuvfxL~KqGMVvhf9zj0pdgr4KqQze7LY8JzpRW1LbXAcHriNlKCxQ__',
    'https://s3-alpha-sig.figma.com/img/f89d/d380/8c39ff8b1b4736e60e9215e7eb75ddb6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXLOWblclRi7bCvdY7kL8yq2C3xnGrIeCgnVSTdvVtMUSaOjxBh-4j3Rn-HogZrzOEeO0Orh19ucvDvBQvpzBZ2MWzyFucwOLNpyZKsxdmpb-LNwN-Woi2RfNJv2dL1BTgE7R-q4umOY7M9vq1lVvPD6-7FIHvu96-rx4uoYUY~GMuqK7H4IFXCZGJwizlyk9rdeo2jNJgZBvy9N9eGki~pjwddaTGnVBwim8jvoDqgz-W~Kxi~USmbbcRhe8ru2BsPHgriI7kvnNcpxuJdEBIkl6439h0feczcfr2My4nxTgOEY5KzSP6q8GzUNuE2yZIUtPQWwAlglsO8gn2oQfQ__',
    // 
    'https://s3-alpha-sig.figma.com/img/a57e/d21c/37f825801210abf12281f82a79d49467?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASH78D9MfPDpM2XLhiQwOwtVjldpy3cWzn73a-8BKFWCRk7ovkOdnKQhAo-DwYRqyq32qP3BgHxl5DH1RkMpDKds3ppTjbzyjCuxG5OEb24aYZcxwUGcWJQrozWKQqJ2OPmw5v1Giy4afbaz3jGg69zjQKiGpiWkkb8QCRslA7Wt8HCd2mAVpQfqKIXJgVpn1lPvBpZ4wQDnIl2814RPym4AW7FiZEHLIic8o6smERFDR9LL3ZoWISf-PX5qi75WFcs0OnHPYRWEkCdp370744l6wwD2mwaQAt-N7jRZ9q5ZSSXG7Nu-QsxWqEFeFYp85r1QIasSfHNha0cCm5bBaA__',
    'https://s3-alpha-sig.figma.com/img/53de/d97a/f2325ad41c4d0053a21164644ca06e82?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnsqn3syKeYI0A0bWyU6BnN07gy5FtIFQ5ag5GciaDQYyM1Iy2IpIVHb75nTuryfD1BUX7Clgu7blFBKeyvfGsztEhMvhIQ9QsdRFBBR9DpEN6IaX92x2aci0akhaM8L8I0T5-rONV6D4DuShwbzOcH2xQtrCoegfjRAVXmCP8EBEqpyuIqlt07AcRnor8IhE4PDohf8bSIeCk0t83DDYyelzmNv-ExDPklr-cgokCmoywkGFv-R5SIPlv0y3W5oR~4nK3wq8~r-oT0Jo8MCI0s8edSr0eP795Jhpo82dxhVEc5pC6xgAZ0DLNLFlDdsow6mSyay4QXn~Ei1sRBsgw__',
    'https://s3-alpha-sig.figma.com/img/5f3e/8e3b/0562ed4fbf35c35ed77b63b42330cac6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edKOZ9oozeJst~Uny0XehMO~F84Qh-WwFy~XHpJWI0pbTcV5C2wVpMp~W7FdiQMeCr9qFY3qLklzrezOoCxZxR9iuJkfkekN8ePH97pUvkPVbPT1eeeTBBsb9IKHe6d~0F5MPsnQ39g6~7wAggrMdAsPM9vTr-ESwhkSBTXy5n6bxLKaVeE5fWKLr0Wgpa2oF1PjDIi-LJIMvn4E29xtZAsXYKvHwD5GV6cbX5Yx5Bh7V-N4V574lcmqshg4S95ahQohbJPdtmCQE34yPVCjmFULqzGHDShPDKhydLrUIUoHLbqZTzblJtceqD3VlxC~a58P4ekIqwaMnnnLCuYENg__',
    'https://s3-alpha-sig.figma.com/img/cc46/a1f6/70b7a39e5201f5dce9c5787cc9506277?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSV82u1Nvd1x-2z5ifvDKh0jn8pywq6N5FW1Do1tAJBtQjnP-p4klqZOV8HARTWyaI53orGeodfkVW3InMFc5cv0iaH7MMEPWmtzdFIIYBxaRS3SZ7zFDVqDuB8K8Cp-OW4cQG2vKoRAP26rKsD3c3u0yowW02yLp135EDEG3IDFQcpdA2Ma2VHNB17RlTtmfwyOX8jyjsXLQ2kHV8zopu10aYHAVZfx2U~o5IpzQ1EINd56a67XjDGoKo54Eo9rM9n1mh8WTFN9i0V2UiDif8ulRBPxSLoH5qsAJdHIXgM7kaa0RQIzGGlWUaGi2LRKCKq2FYh~qZo7lbikCzxlUg__',
    'https://s3-alpha-sig.figma.com/img/f39f/f860/7438d2151bd94d45def4c8b58c06b961?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1cfsf3e9lf-3woyREZTyTdcgf2SgZiSdW~tu~iHUKUMT23~KVYUvRmyA8TsmshR~Y-BKOoYATpKceJscCb~bZD-2sn8os7mZxGWMU-G0LXEzbHHLMfk9rGcjMRr3tYvCTGXZB8P37iNs17EVYWJKubEGVo-PdvDIZrUcblMmOF5AagZQRCMGH1c2BjLRaLrZ9e7VGZMNPFCe3ZUXyS1gp7OKT08N2f4peYU2aVvYujKKVSlbEdg8IIvJD8DqRjn39Xz13cCN1YneGxlgEaIoFztLXRMs5J4SMDhcbsZfaej73etaJCcBJnPFw93PqR~wA6~U9jaycBXT9R4ttph3A__',
    'https://s3-alpha-sig.figma.com/img/90f1/f0d9/b30e817e750d4f95a131093653e9ab98?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mvv8~AiNV2pFwVucv~u~s0f7bgCa9chedRj9SfyubRYeAfe6YOsXXIskU7PXGayP2EdeMdF7o4v79~D6Vi~P6zpcZhpvOIU3YoB18sYDWpbZFpc~J-40ZS92bWbqnREPX2fvI5CvUqnDjIsVLlm8azyl8JJhgSdiAfOtvqpVqh9f6fYo0rTi8lSu7X4v0MpdovUQwSII35SrzRSay-maEXcNstigKQYMFdxocgiOFWdr5Zq~GvLxObjDaUu5mb6XQVPtiKqUUkq2X-0EEaqSz2~aJ3XMFdN8HyjUbbrmIOtporkTF4RfWnVtewDgWGd75hZkGWq-EN4mEdsmcTGGeQ__',
    'https://s3-alpha-sig.figma.com/img/0ce7/acac/2c5f13bd4bfa8aaf570bac35d4c07b12?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jh9l~hvqTEF3iQeLM79aC8NBfW~8C3MBwNYWLQX8L-BoszLr7beomHLu3HrznHncxAqzQtzL3sdc-VrEhKPEpWTCHfEesH8iDEIpjc8d8leFdRWIIFFl-ikV-QsMLflhn2aTNk1Iq1Yw13D8-9g8r3hYCdWVgB4~PUb1YqI2BCo5MU2Uz6ySAuvONAO6t-6CQnhLDzvmwf-g-hUebeKuFgbVfEQ07nX863ZcKcXPGJTmZtBbAYdYZR8Hb96~qGn1mThy1g6zZfwfFkJ6PqPyrq~6L-VhkB7nAHuvfxL~KqGMVvhf9zj0pdgr4KqQze7LY8JzpRW1LbXAcHriNlKCxQ__',
    'https://s3-alpha-sig.figma.com/img/f89d/d380/8c39ff8b1b4736e60e9215e7eb75ddb6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXLOWblclRi7bCvdY7kL8yq2C3xnGrIeCgnVSTdvVtMUSaOjxBh-4j3Rn-HogZrzOEeO0Orh19ucvDvBQvpzBZ2MWzyFucwOLNpyZKsxdmpb-LNwN-Woi2RfNJv2dL1BTgE7R-q4umOY7M9vq1lVvPD6-7FIHvu96-rx4uoYUY~GMuqK7H4IFXCZGJwizlyk9rdeo2jNJgZBvy9N9eGki~pjwddaTGnVBwim8jvoDqgz-W~Kxi~USmbbcRhe8ru2BsPHgriI7kvnNcpxuJdEBIkl6439h0feczcfr2My4nxTgOEY5KzSP6q8GzUNuE2yZIUtPQWwAlglsO8gn2oQfQ__',

]


export default function AboutUs() {

    const tl = gsap.timeline({})
    useGSAP(() => {
        const wrapper = document.querySelector('.image-slider') as HTMLElement
        const wrapperWidth = wrapper?.scrollWidth

        tl.to('.image-slider__container.one', {
            duration: 90,
            ease: "none",
            x: -wrapperWidth,
            repeat: -1,
        })

        gsap.to('.image-slider__container.two', {
            duration: 90,
            ease: "none",
            x: wrapperWidth,
            repeat: -1,
        })
    })
    return (
        <section className='about'>
            <div className='about__text'>
                <h1 className='about__text-title'>where productivity meets community</h1>
                <p className='about__text-sub'>
                    Step into our co-working sanctuary – where ambition ignites and creativity flourishes. With top-notch amenities and a vibrant community, fuel your drive and feed your imagination. Welcome to the space where your dreams take flight.
                </p>
            </div>
            <div className='about__images'>
                <div className='image-slider'>
                    <div className='image-slider__container one'>
                        {images.map((image, index) => (
                            <Image key={index} src={image} width={416} height={340} alt='office' className='image-slider__image' />
                        ))}
                    </div>
                </div>
                <div className='image-slider'>
                    <div className='image-slider__container two'>
                        {secondImageSlider.map((image, index) => (
                            <Image key={index} src={image} width={416} height={340} alt='office' className='image-slider__image' />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}