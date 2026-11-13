// ui components
import Social from '@/components/ui/Social'

// css imports
import '@/css/sections/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="mn_tn">
                <strong className="footer-logo flx f_c rlt">Brad FitzGerald</strong>
                <Social className="f_c rlt" />
                <small className="flx-at-550 f_rev f_t f_sb gp-sm">
                    <span className="blk">Designed & deved by Brad FitzGerald<br />Built with React, Next.js, Node & AWS</span>
                    <span className="blk">© 2026 Brad FitzGerald</span>
                </small>
            </div>
        </footer>
    )
}

export default Footer