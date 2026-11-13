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
                <small className="flx-at-650 f_rev f_sb f_m">
                    <span>Built with React / Next.js and ❤️</span>
                    <span>© 2026 Brad FitzGerald</span>
                </small>
            </div>
        </footer>
    )
}

export default Footer