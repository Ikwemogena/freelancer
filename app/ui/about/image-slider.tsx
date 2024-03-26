import React from 'react'

const images = [
    'https://s3-alpha-sig.figma.com/img/a57e/d21c/37f825801210abf12281f82a79d49467?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASH78D9MfPDpM2XLhiQwOwtVjldpy3cWzn73a-8BKFWCRk7ovkOdnKQhAo-DwYRqyq32qP3BgHxl5DH1RkMpDKds3ppTjbzyjCuxG5OEb24aYZcxwUGcWJQrozWKQqJ2OPmw5v1Giy4afbaz3jGg69zjQKiGpiWkkb8QCRslA7Wt8HCd2mAVpQfqKIXJgVpn1lPvBpZ4wQDnIl2814RPym4AW7FiZEHLIic8o6smERFDR9LL3ZoWISf-PX5qi75WFcs0OnHPYRWEkCdp370744l6wwD2mwaQAt-N7jRZ9q5ZSSXG7Nu-QsxWqEFeFYp85r1QIasSfHNha0cCm5bBaA__',
    'https://s3-alpha-sig.figma.com/img/53de/d97a/f2325ad41c4d0053a21164644ca06e82?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnsqn3syKeYI0A0bWyU6BnN07gy5FtIFQ5ag5GciaDQYyM1Iy2IpIVHb75nTuryfD1BUX7Clgu7blFBKeyvfGsztEhMvhIQ9QsdRFBBR9DpEN6IaX92x2aci0akhaM8L8I0T5-rONV6D4DuShwbzOcH2xQtrCoegfjRAVXmCP8EBEqpyuIqlt07AcRnor8IhE4PDohf8bSIeCk0t83DDYyelzmNv-ExDPklr-cgokCmoywkGFv-R5SIPlv0y3W5oR~4nK3wq8~r-oT0Jo8MCI0s8edSr0eP795Jhpo82dxhVEc5pC6xgAZ0DLNLFlDdsow6mSyay4QXn~Ei1sRBsgw__',
    'https://s3-alpha-sig.figma.com/img/5f3e/8e3b/0562ed4fbf35c35ed77b63b42330cac6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edKOZ9oozeJst~Uny0XehMO~F84Qh-WwFy~XHpJWI0pbTcV5C2wVpMp~W7FdiQMeCr9qFY3qLklzrezOoCxZxR9iuJkfkekN8ePH97pUvkPVbPT1eeeTBBsb9IKHe6d~0F5MPsnQ39g6~7wAggrMdAsPM9vTr-ESwhkSBTXy5n6bxLKaVeE5fWKLr0Wgpa2oF1PjDIi-LJIMvn4E29xtZAsXYKvHwD5GV6cbX5Yx5Bh7V-N4V574lcmqshg4S95ahQohbJPdtmCQE34yPVCjmFULqzGHDShPDKhydLrUIUoHLbqZTzblJtceqD3VlxC~a58P4ekIqwaMnnnLCuYENg__',
    'https://s3-alpha-sig.figma.com/img/cc46/a1f6/70b7a39e5201f5dce9c5787cc9506277?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSV82u1Nvd1x-2z5ifvDKh0jn8pywq6N5FW1Do1tAJBtQjnP-p4klqZOV8HARTWyaI53orGeodfkVW3InMFc5cv0iaH7MMEPWmtzdFIIYBxaRS3SZ7zFDVqDuB8K8Cp-OW4cQG2vKoRAP26rKsD3c3u0yowW02yLp135EDEG3IDFQcpdA2Ma2VHNB17RlTtmfwyOX8jyjsXLQ2kHV8zopu10aYHAVZfx2U~o5IpzQ1EINd56a67XjDGoKo54Eo9rM9n1mh8WTFN9i0V2UiDif8ulRBPxSLoH5qsAJdHIXgM7kaa0RQIzGGlWUaGi2LRKCKq2FYh~qZo7lbikCzxlUg__',
]

export default function ImageSlider() {
    return (
        <div className='image-slider'>
            <div className='image-slider__container'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt='office' className='image-slider__image' />
                ))}
            </div>
        </div>
    )
}