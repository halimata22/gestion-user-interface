function Sidebar() {
    return(
        <div className="bg-dark text-white min-vh-100 p-4" >
            <h4 className="text-center mb-4">Menu</h4>
            <ul className="list-unstyled">
                <li className="mb-3 p-2 rounded dg-scondary">Accueil</li>
                <li className="mb-3 p-2 rouded">Etudiants</li>
                <li className="mb-3 p-2 rounded">Cours</li>
                <li className="mb-3 p-2 rounded">Notes</li>
            </ul>
        </div>
    );
}
export default Sidebar;