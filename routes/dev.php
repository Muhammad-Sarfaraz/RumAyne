<?php

Route::get('markdown', function () {
    return view("frontend.markdown.index");
});

Route::get('dev', function () {
    return "Dev";
});
