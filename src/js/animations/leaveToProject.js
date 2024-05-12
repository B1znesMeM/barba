import gsap from 'gsap';

const leaveToProject = (container) => {

    const activeLink = container.querySelector('a.is-active span')
    const projects = container.querySelectorAll('.project')
    const images = container.querySelectorAll('.img')

    const tl = gsap.timeline({
        defaults: {
            duration: .4, ease: 'power1.in'
        }
    })

    tl
    .to(activeLink, { yPercent: 100, stagger: .05 }, 0)
    .to(projects, { xPercent: 101, stagger: .05 }, 0)
    .to(images, { xPercent: -101, stagger: .05 }, 0)


    return tl
}

export default leaveToProject