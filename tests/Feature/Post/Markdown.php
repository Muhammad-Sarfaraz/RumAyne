<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
}
test('sum', function () {
    $result = sum(1, 2);

    expect($result)->toBe(3);
});
