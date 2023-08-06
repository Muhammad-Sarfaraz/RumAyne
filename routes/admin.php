<?php

Route::get('admin', function () {
    return "Admin Route";
})->middleware('backend');
