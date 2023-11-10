export default function Filter({handleName,handleGender, selectedGender, handleBrand,selectedBrand}){
    return(
        <div id="filter">
            {/* filter based on names */}
           <input className="filter"  type="text" name="search" onChange={handleName} placeholder="Search names ..."/>
            <div id="sort">
                {/* sort based on gender */}
                <select className="filter" id="sortGender" onChange={handleGender} value={selectedGender}>
                    <option className="filter" value="All">All Genders</option>
                    <option className="filter" value="men">Men</option>
                    <option className="filter"  value="women">Women</option>
                    <option className="filter" value="kids">Kids</option>
                </select>
                {/* sort based on brand */}
                <select className="filter" id="sortBrand" onChange={handleBrand} value={selectedBrand}>
                    <option className="filter" value="All">All Brands</option>
                    <option className="filter" value="nike">Nike</option>
                   <option className="filter"  value="hushpuppies">Hushpupies</option>
                    <option className="filter" value="adidas">Adidas</option>
                   <option className="filter" value="vans">Vans</option>
                     <option className="filter" value="reebok">Reebok</option>
                </select>
</div>
</div>
)
}