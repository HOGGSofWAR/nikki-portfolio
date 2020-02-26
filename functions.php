<?php

// include ("functions.blocks.php");
// include ("functions.cpt.php");

function getSVG($path)
{
    $loc = __DIR__ . "/images/$path";

    if (!file_exists($loc)) {
        echo "file not found - " . __DIR__ . "/images/$path";
        return false;
    }
    $svg = file_get_contents($loc);

    return substr($svg, strpos($svg, '<svg'));

}
