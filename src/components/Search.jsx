import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {
    const query = useQuery(); 
    const search = query.get("search"); 
    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        navigate.push("/?search=" + value)
                    }}
                 />
                <FaSearch className={styles.searchButton} />             
            </div>
        </form>
    )
}
